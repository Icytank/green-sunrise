export const prerender = false;

import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';
import { InquirySchema, type InquiryRecord } from '../../utils/inquiry-schema';

export const POST: APIRoute = async ({ request, locals }) => {
    // Access runtime environment variables (Cloudflare) or fallback to build-time (Local Dev)
    const runtimeEnv = locals.runtime?.env || import.meta.env;

    const formData = await request.formData();

    // 0. Extract Turnstile Token (Check presence)
    const turnstileToken = formData.get('cf-turnstile-response') as string;
    if (!turnstileToken) {
        return new Response(JSON.stringify({ success: false, message: 'Turnstile token missing' }), { status: 400 });
    }

    // 1. Validate Data Schema
    const rawData = {
        leadName: formData.get('name'),
        company: formData.get('company'),
        email: formData.get('email'),
        projectType: formData.get('projectType'),
        message: formData.get('message'),
        lang: formData.get('lang') || 'en',
    };

    const validation = InquirySchema.safeParse(rawData);

    if (!validation.success) {
        return new Response(JSON.stringify({
            success: false,
            message: 'Validation Failed',
            errors: validation.error.flatten().fieldErrors
        }), { status: 400 });
    }

    const { leadName, email, company, projectType, message, lang } = validation.data;

    // 2. Verify Turnstile with Cloudflare
    // "Proper" Cloudflare way: access secret via runtime context
    const secretKey = runtimeEnv.TURNSTILE_SECRET_KEY as string;

    if (!secretKey) {
        console.error('SERVER ERROR: TURNSTILE_SECRET_KEY is missing');
        return new Response(JSON.stringify({ success: false, message: 'Server configuration error' }), { status: 500 });
    }

    const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            secret: secretKey,
            response: turnstileToken,
        }),
    });

    const verifyResult: any = await verifyResponse.json();
    if (!verifyResult.success) {
        return new Response(JSON.stringify({ success: false, message: 'Invalid Turnstile token' }), { status: 400 });
    }

    // 3. Send Email via Gmail SMTP (Nodemailer)
    const gmailUser = runtimeEnv.GMAIL_USER as string;
    const gmailPass = runtimeEnv.GMAIL_APP_PASSWORD as string;
    const toEmail = 'office@green-sunrise.bg'; // Hardcoded or env var as needed

    if (!gmailUser || !gmailPass) {
        console.error('SERVER ERROR: GMAIL credentials missing');
        // In local dev without keys, we might want to just log usage
        if (!runtimeEnv.GMAIL_USER && import.meta.env.DEV) {
            console.log('[DEV] Mock Send Email:', { leadName, email, projectType });
            return new Response(JSON.stringify({ success: true, message: 'Inquiry sent successfully (MOCK)' }), { status: 200 });
        }
        return new Response(JSON.stringify({ success: false, message: 'Server configuration error' }), { status: 500 });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports (using STARTTLS)
            auth: {
                user: gmailUser,
                pass: gmailPass,
            },
        });

        await transporter.sendMail({
            from: `"Green Sunrise" <${gmailUser}>`, // Gmail overrides 'from' to be the authenticated user usually, but good practice
            to: toEmail,
            replyTo: email, // Set the reply-to as the lead's email
            subject: `New Lead: ${projectType} - ${company}`,
            html: `
                <h1>New B2B Inquiry (${lang.toUpperCase()})</h1>
                <p><strong>Name:</strong> ${leadName}</p>
                <p><strong>Company:</strong> ${company}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Project Type:</strong> ${projectType}</p>
                <hr />
                <h3>Message:</h3>
                <p>${message}</p>
            `,
        });

        // 4. Log the Inquiry Record (with timestamp)
        const timestamp = new Date().toISOString();
        console.log(`[LEAD] ${timestamp} | ${company} | ${projectType}`);

        return new Response(JSON.stringify({ success: true, message: 'Inquiry sent successfully' }), { status: 200 });

    } catch (error) {
        console.error('Nodemailer Error:', error);
        return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), { status: 500 });
    }
};

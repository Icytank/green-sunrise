export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { InquirySchema, type InquiryRecord } from '../../utils/inquiry-schema';

export const POST: APIRoute = async ({ request }) => {
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
    const secretKey = import.meta.env.TURNSTILE_SECRET_KEY;
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

    // 3. Send Email via Resend
    const resendKey = import.meta.env.RESEND_API_KEY;
    if (!resendKey) {
        console.error('SERVER ERROR: RESEND_API_KEY is missing');
        return new Response(JSON.stringify({ success: false, message: 'Server configuration error' }), { status: 500 });
    }

    const resend = new Resend(resendKey);

    try {
        const { error } = await resend.emails.send({
            from: 'Green Sunrise <leads@yourdomain.com>',
            to: ['admin@yourdomain.com'],
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
        const record: InquiryRecord & { timestamp: string } = {
            ...validation.data,
            timestamp,
        };
        console.log(`[LEAD] ${timestamp} | ${company} | ${projectType}`);

        if (error) {
            console.error('Resend Error:', error);
            return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true, message: 'Inquiry sent successfully' }), { status: 200 });
    } catch (e) {
        console.error('Unexpected Error:', e);
        return new Response(JSON.stringify({ success: false, message: 'Internal Server Error' }), { status: 500 });
    }
};

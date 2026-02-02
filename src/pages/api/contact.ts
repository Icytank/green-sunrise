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
        phone: formData.get('phone'),
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

    const { leadName, email, company, phone, projectType, message, lang } = validation.data;

    // 2. Verify Turnstile with Cloudflare (Skip in DEV)
    if (!import.meta.env.DEV) {
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
    } else {
        console.log('[DEV] Skipping Turnstile Validation');
    }

    // 3. Send Email via Gmail SMTP (Nodemailer)
    const gmailUser = runtimeEnv.GMAIL_USER as string;
    const gmailPass = runtimeEnv.GMAIL_APP_PASSWORD as string;
    const toEmail = runtimeEnv.CONTACT_DESTINATION_EMAIL as string;



    if (!gmailUser || !gmailPass) {
        console.error('SERVER ERROR: GMAIL credentials missing');
        // In local dev without keys, we might want to just log usage
        if (!runtimeEnv.GMAIL_USER && import.meta.env.DEV) {
            console.log('[DEV] Mock Send Email:', { leadName, email, phone, projectType });
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

        const brandColor = "#064e3b"; // gs-institutional-green
        const textColor = "#1f2937";
        const lightGray = "#f3f4f6";

        await transporter.sendMail({
            from: `"Green Sunrise" <${gmailUser}>`, // Gmail overrides 'from' to be the authenticated user usually, but good practice
            to: toEmail,
            replyTo: email, // Set the reply-to as the lead's email
            subject: `New Lead: ${projectType} - ${company}`,
            html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; line-height: 1.6; color: ${textColor}; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; }
    .header { background-color: ${brandColor}; color: #ffffff; padding: 24px; text-align: center; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
    .content { padding: 32px 24px; }
    .field-group { margin-bottom: 24px; }
    .field-label { font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; margin-bottom: 4px; display: block; }
    .field-value { font-size: 16px; font-weight: 600; color: ${textColor}; }
    .message-box { background-color: ${lightGray}; padding: 20px; border-radius: 8px; margin-top: 8px; font-size: 16px; white-space: pre-wrap; }
    .footer { text-align: center; padding-top: 24px; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px; }
</style>
</head>
<body style="background-color: #f9fafb; padding: 40px 0;">
    <div class="container">
        <div class="header">
            <h1>New Inquiry (${lang.toUpperCase()})</h1>
        </div>
        
        <div class="content">
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                <div style="flex: 1; min-width: 200px;">
                    <div class="field-group">
                        <span class="field-label">Name</span>
                        <div class="field-value">${leadName}</div>
                    </div>
                </div>
                <div style="flex: 1; min-width: 200px;">
                     <div class="field-group">
                        <span class="field-label">Company</span>
                        <div class="field-value">${company}</div>
                    </div>
                </div>
            </div>

            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
                <div style="flex: 1; min-width: 200px;">
                    <div class="field-group">
                        <span class="field-label">Email</span>
                        <div class="field-value"><a href="mailto:${email}" style="color: ${brandColor}; text-decoration: none;">${email}</a></div>
                    </div>
                </div>
                 <div style="flex: 1; min-width: 200px;">
                    <div class="field-group">
                        <span class="field-label">Phone</span>
                        <div class="field-value">${phone || '<span style="color: #9ca3af; font-weight: 400;">Not provided</span>'}</div>
                    </div>
                </div>
            </div>

            <div class="field-group">
                <span class="field-label">Project Type</span>
                 <div class="field-value" style="display: inline-block; background-color: ${brandColor}10; color: ${brandColor}; padding: 4px 12px; border-radius: 100px; font-size: 14px;">${projectType}</div>
            </div>

            <div class="field-group">
                <span class="field-label">Message</span>
                <div class="message-box">${message}</div>
            </div>
        </div>
        
        <div class="footer">
            <p>Sent from Green Sunrise Contact Form</p>
        </div>
    </div>
</body>
</html>
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

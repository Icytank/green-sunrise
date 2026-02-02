import { z } from 'zod';

export const InquirySchema = z.object({
    leadName: z.string().min(1, "Name is required"),
    company: z.string().min(1, "Company is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    projectType: z.enum(['Utility', 'Roof-top']),
    message: z.string().min(1, "Message is required"),
    lang: z.enum(['en', 'bg']).optional().default('en'),
});

export type InquiryRecord = z.infer<typeof InquirySchema>;

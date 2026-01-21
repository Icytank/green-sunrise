import { describe, it, expect } from 'vitest';
import { InquirySchema, type InquiryRecord } from './inquiry-schema';

describe('InquirySchema', () => {
    it('validates a correct inquiry record', () => {
        const validData = {
            leadName: 'John Doe',
            company: 'Solar Corp',
            email: 'john@example.com',
            projectType: 'Utility',
            message: 'Interested in a 5MW project.',
            lang: 'en'
        };
        const result = InquirySchema.safeParse(validData);
        expect(result.success).toBe(true);
    });

    it('rejects missing required fields', () => {
        const invalidData = {
            leadName: 'John Doe',
            // Missing company, email, etc.
        };
        const result = InquirySchema.safeParse(invalidData);
        expect(result.success).toBe(false);
        if (!result.success) {
            const errors = result.error.flatten().fieldErrors;
            expect(errors.company).toBeDefined();
            expect(errors.email).toBeDefined();
        }
    });

    it('rejects invalid emails', () => {
        const invalidData = {
            leadName: 'John Doe',
            company: 'Solar Corp',
            email: 'not-an-email',
            projectType: 'Utility',
            message: 'Hello',
            lang: 'en'
        };
        const result = InquirySchema.safeParse(invalidData);
        expect(result.success).toBe(false);
        if (!result.success) {
            expect(result.error.flatten().fieldErrors.email).toBeDefined();
        }
    });

    it('rejects invalid project types', () => {
        const invalidData = {
            leadName: 'John Doe',
            company: 'Solar Corp',
            email: 'john@example.com',
            projectType: 'Residential', // Not in enum
            message: 'Hello',
            lang: 'en'
        };
        const result = InquirySchema.safeParse(invalidData);
        expect(result.success).toBe(false);
    });
});

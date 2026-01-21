import { describe, it, expect, vi, beforeEach } from 'vitest';
import { handleSubmit } from './ContactFormLogic';

describe('ContactFormLogic', () => {
    beforeEach(() => {
        vi.resetAllMocks();
        global.fetch = vi.fn();
    });

    it('should submit form data successfully', async () => {
        const formData = new FormData();
        formData.append('name', 'Test User');
        formData.append('company', 'Test Corp');
        formData.append('email', 'test@example.com');
        formData.append('projectType', 'Utility');
        formData.append('message', 'Hello world');
        formData.append('cf-turnstile-response', 'dummy-token');

        (global.fetch as any).mockResolvedValue({
            ok: true,
            status: 200,
        });

        const result = await handleSubmit(formData);

        // Verify fetch is called with correct parameters
        expect(global.fetch).toHaveBeenCalledTimes(1);
        const [url, options] = (global.fetch as any).mock.calls[0];
        expect(url).toBe('/'); // Netlify/Cloudflare forms usually post to same URL
        expect(options.method).toBe('POST');
        expect(options.headers['Content-Type']).toBe('application/x-www-form-urlencoded');

        // Verify body is URLSearchParams
        expect(options.body).toBeInstanceOf(URLSearchParams);
        const bodyParams = options.body as URLSearchParams;
        expect(bodyParams.get('form-name')).toBe('contact');
        expect(bodyParams.get('name')).toBe('Test User');
        expect(bodyParams.get('cf-turnstile-response')).toBe('dummy-token');

        expect(result.success).toBe(true);
    });

    it('should fail if turnstile token is missing', async () => {
        const formData = new FormData();
        formData.append('name', 'Test User');
        // No turnstile token

        const result = await handleSubmit(formData);

        expect(result.success).toBe(false);
        expect(result.message).toContain('Turnstile');
    });

    it('should return error on failed network request', async () => {
        const formData = new FormData();
        (global.fetch as any).mockRejectedValue(new Error('Network error'));

        const result = await handleSubmit(formData);

        expect(result.success).toBe(false);
        expect(result.message).toBeDefined();
    });
});

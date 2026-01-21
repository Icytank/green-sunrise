export interface SubmissionResult {
    success: boolean;
    message?: string;
    errors?: Record<string, string>;
}

export async function handleSubmit(formData: FormData): Promise<SubmissionResult> {
    const params = new URLSearchParams(formData as any);
    // Add Netlify form name if not present (though it should be in hidden input, safeguarding here just in case)
    if (!params.has('form-name')) {
        params.append('form-name', 'contact');
    }

    // Verify Turnstile Token
    const turnstileToken = params.get('cf-turnstile-response');
    if (!turnstileToken) {
        return { success: false, message: 'Turnstile challenge required. Please refresh and try again.' };
    }

    try {
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params,
        });

        if (!response.ok) {
            return { success: false, message: `Server error: ${response.status}` };
        }

        return { success: true };
    } catch (error) {
        return { success: false, message: 'Network error occurred' };
    }
}

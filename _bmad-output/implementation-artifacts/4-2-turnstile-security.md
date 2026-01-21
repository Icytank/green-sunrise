# Story 4.2: Anti-Spam Security - Cloudflare Turnstile

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an administrator,
I want to protect the contact form from spam without frustrating professional users,
so that I only receive legitimate business inquiries.

## Acceptance Criteria

1. **Given** the contact form is visible (Story 4.1)
2. **When** the page loads
3. **Then** a Cloudflare Turnstile widget is rendered within the form
4. **And** form submission is blocked until the Turnstile challenge is successfully passed
5. **And** the Turnstile token is included in the form payload
6. **And** the UX remains transparent and non-intrusive (non-interactive challenge preferred)
7. **And** error handling is provided if the Turnstile widget fails to load

## Tasks / Subtasks

- [ ] Integrate Turnstile Client-Side Widget (AC: 2, 3, 6)
  - [ ] Add the Turnstile script tag to the `<head>` or specifically in the `ContactForm` component
  - [ ] Implement the `cf-turnstile` div with the appropriate site key (use placeholders for now)
- [ ] Form Submission Interaction (AC: 4, 5)
  - [ ] Modify the submit handler in `ContactForm.astro` to retrieve the `cf-turnstile-response` token
  - [ ] Ensure the "Send Inquiry" button is disabled or submission is prevented if the token is missing
- [ ] Security Configuration (AC: 7)
  - [ ] Define environment variable placeholders for `TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`

## Dev Notes

### Architecture Patterns & Constraints
- **Security:** Turnstile handles spam protection without the friction of captchas, aligning with our "Premium" UX requirement.
- **Client-Side JS:** Loading the widget script is mandatory. Use the `async defer` attributes to prevent blocking the <1s FCP target.
- **Privacy:** Turnstile is a more privacy-friendly alternative to reCAPTCHA, which fits the "Institutional Stability" profile.

### Source Tree Components to Touch
- `src/components/ContactForm.astro` [MODIFY]
- `.env` [NEW/MODIFY] - for site keys.

### Testing Standards Summary
- Verify that the form payload contains the `cf-turnstile-response` field.
- Verify that the form cannot be submitted if the Turnstile script fails to load or the challenge is not completed.

## References

- [Architecture - Authentication & Security](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L122-L124)
- [PRD - Non-Functional Requirements (NFR7)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L195)
- [Project Context - Zero-JS Priority (as a last resort)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L60)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

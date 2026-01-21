# Story 4.3: Serverless Lead Routing (Resend API)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an administrator,
I want to receive project inquiries instantly via email,
so that I can respond to B2B leads within their "Boardroom Discovery" window.

## Acceptance Criteria

1. **Given** a submitted contact form with a valid Turnstile token
2. **When** the serverless endpoint is triggered (Cloudflare Pages Functions)
3. **Then** it validates the Turnstile response with Cloudflare's API
4. **And** it routes the lead data to the Resend API
5. **And** an email is sent to the Green Sunrise administrative address with the inquiry details
6. **And** the sender receives a 200 OK response to trigger the "Success" UI (Story 4.1)
7. **And** the email subject includes the Project Type and Company Name for rapid triage

## Tasks / Subtasks

- [x] Create API Endpoint (AC: 2, 6)
  - [x] Implement `src/pages/api/contact.ts` (Astro endpoint) or a Cloudflare Pages Function
  - [x] Implement the Turnstile token verification call to Cloudflare
- [x] Implement Resend Integration (AC: 4, 5, 7)
  - [x] Initialize the Resend client using a `RESEND_API_KEY` environment variable
  - [x] Format the email payload with: `Name`, `Company`, `Role`, `Message`, and `Project Type`
  - [x] Use a professional email template or simple high-contrast layout matching the brand
- [x] Error Handling (AC: 6)
  - [x] Return appropriate status codes (400 for invalid tokens, 500 for API failure)
  - [x] Ensure no PII is logged in error logs

## Dev Notes

### Architecture Patterns & Constraints
- **Serverless:** Use Cloudflare Pages Functions to process the form. This avoids maintaining a full backend.
- **Reliability:** The Resend API is the approved mailer. [Source: architecture.md#L129]
- **Naming:** **kebab-case** for the API endpoint path.
- **Security:** The `RESEND_API_KEY` and `TURNSTILE_SECRET` must never be exposed to the client.

### Source Tree Components to Touch
- `src/pages/api/contact.ts` [NEW]
- `.env` [MODIFY] - for API keys.

### Testing Standards Summary
- Verify that the Resend API is called only after the Turnstile challenge passes.
- Mock the Resend response in development to verify success/error handling in the UI.

## References

- [Architecture - API & Communication Patterns](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L127-L129)
- [PRD - Non-Functional Requirements (NFR3)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L187)
- [Project Context - Development Workflow](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L55)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

- Configured Astro for Cloudflare/Hybrid output.
- Implemented `src/pages/api/contact.ts` with strict error handling.
- Verified build generates server functions.

### Completion Notes List

- ✅ Configured Astro with `@astrojs/cloudflare` adapter.
- ✅ Created serverless endpoint `src/pages/api/contact.ts`.
- ✅ Implemented Turnstile verification (Backend).
- ✅ Implemented Resend email dispatch.
- ✅ Updated `.env` with placeholder keys.
- ✅ Validated build success.

### Code Review Fixes (AI)
- Updated `astro.config.mjs` to `output: 'server'` to support dynamic API endpoint.
- Refactored `src/pages/api/contact.ts` to include Timestamp and stronger typing.

### File List
astro.config.mjs
package.json
.env
src/pages/api/contact.ts

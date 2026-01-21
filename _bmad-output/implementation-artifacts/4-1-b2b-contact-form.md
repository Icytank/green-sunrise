# Story 4.1: Specialized B2B Contact Form

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor (Ivan),
I want to specify my project type and technical requirements in a contact form,
so that my inquiry is qualified and ready for a technical discussion.

## Acceptance Criteria

1. **Given** the contact page or a project inquiry link
2. **When** the user fills out the form
3. **Then** they must provide `Name`, `Company`, `Email`, `Project Type` (Utility/Roof), and `Message`
4. **And** the form requires all fields before submission
5. **And** the form UI matches the "Corporate Pitch" aesthetic (Executive White surface, 8px grid)
6. **And** any error messages use clear technical language and `--gs-text-primary` or appropriate semantic tokens
7. **And** the form is fully responsive and mobile-optimized for on-site leads

## Tasks / Subtasks

- [ ] Implement B2B Contact Form Component (AC: 1, 3, 5, 7)
  - [ ] Create `ContactForm.astro` PascalCase component
  - [ ] Use semantic `<form>`, `<label>`, and `<input>` elements
  - [ ] Implement a dropdown or radio group for `Project Type` (Utility-scale / Industrial Roof-top)
- [ ] Form Validation & Constraints (AC: 4, 6)
  - [ ] Add HTML5 validation for all required fields
  - [ ] Implement custom styling for `:invalid` states using `--gs-institutional-green` or a neutral error token
- [ ] Success/Error Feedback UI (AC: 6)
  - [ ] Create placeholders for transition states (Sending, Success, Error)
  - [ ] Ensure the "Success" toast message reflects the "Professional Authority" of the brand
- [ ] Integration (AC: 1)
  - [ ] Place the `ContactForm` on the specialized `Contact` page
  - [ ] Add the "Request Partnership" CTA to project detail pages that links to this form

## Dev Notes

### Architecture Patterns & Constraints
- **Zero-Runtime Philosophy:** Prioritize standard HTML/CSS for the initial form state.
- **Client-Side JS:** Reserved for the `fetch` submit call and the Turnstile widget (Story 4.2).
- **Naming:** **PascalCase** for `ContactForm.astro`.
- **UX Intent:** The form should feel like an entry point for a "Strategic Partnership," not a generic "Contact Us" box.

### Source Tree Components to Touch
- `src/components/ContactForm.astro` [NEW]
- `src/pages/[lang]/contact.astro` [MODIFY/NEW]

### Testing Standards Summary
- Verify that the form cannot be submitted if the `Company` or `Project Type` fields are empty.
- Check responsive behavior: Ensure input fields are large enough for thumb-tapping on mobile.

## References

- [Architecture - API & Communication Patterns](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L127-L129)
- [PRD - Functional Requirements (FR8, FR9)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L164-L167)
- [UX Specification - Micro-Emotions (Authority over Subordination)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L83)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

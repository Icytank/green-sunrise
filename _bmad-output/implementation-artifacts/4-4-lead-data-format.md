# Story 4.4: B2B Lead Data Format

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a data analyst,
I want a consistent data format for project inquiries,
so that leads can be easily tracked and eventually integrated into a CRM.

## Acceptance Criteria

1. **Given** a submitted inquiry
2. **When** the serverless endpoint processes the data
3. **Then** it follows the standardized `InquiryRecord` interface:
    - `timestamp`: ISO-8601
    - `leadName`: string
    - `company`: string
    - `email`: email
    - `projectType`: enum ('Utility', 'Roof-top')
    - `message`: string
    - `lang`: 'bg' | 'en' (the language of the site when submitted)
4. **And** the data is validated against this schema using `zod` before processing by Resend
5. **And** the `lang` field is used to ensure the admin email notification is in the appropriate language (optional) or simply noted for the responder

## Tasks / Subtasks

- [ ] Implement Lead Schema Validation (AC: 1, 3, 4)
  - [ ] Create `inquiry-schema.ts` in `src/utils/`
  - [ ] Implement the `zod` schema to validate the incoming request body
- [ ] Update API Handling (AC: 2, 5)
  - [ ] Integrate the `InquiryRecord` validation into the `api/contact.ts` endpoint
  - [ ] Capture the `lang` from the request headers or URL parameters to include in the record
- [ ] Data Transformation (AC: 3)
  - [ ] Format the lead data into the JSON structure required by Story 4.3

## Dev Notes

### Architecture Patterns & Constraints
- **Type Safety:** Use `Zod` to mirror the professional and rigid nature of the data.
- **Naming:** **kebab-case** for `inquiry-schema.ts`.
- **Consistency:** The `projectType` should match the Enum values used in the machinery and project collections where possible to maintain conceptual integrity.

### Source Tree Components to Touch
- `src/utils/inquiry-schema.ts` [NEW]
- `src/pages/api/contact.ts` [MODIFY]

### Testing Standards Summary
- Run unit tests on the `inquiry-schema.ts` to ensure invalid emails or missing fields are caught correctly.
- Verify that the `timestamp` is generated server-side.

## References

- [Architecture - Data Architecture](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L115)
- [PRD - Information Architecture](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L145)
- [Project Context - Code Quality](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L45)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

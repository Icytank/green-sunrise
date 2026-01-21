# Story 2.1: Machinery Schema & Content Collection

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a developer,
I want to define a type-safe schema for owned machinery,
so that I can ensure all technical specs (weight, impact power, model) are correctly stored and retrieved.

## Acceptance Criteria

1. **Given** the Architecture's Content Collection specification
2. **When** the `machinery` collection is defined in `src/content/config.ts` using Astro v5 `zod` schemas
3. **Then** it requires the following fields:
    - `title`: string
    - `model`: string
    - `weight`: string (e.g., "15t")
    - `impactPower`: string (e.g., "200kJ")
    - `heroImage`: image() helper (Source: project context image rules)
    - `galleryImages`: array of image() helper
4. **And** any markdown entry in `src/content/machinery/` missing these fields fails the build
5. **And** images are automatically validated using the `image()` schema helper

## Tasks / Subtasks

- [ ] Define Machinery Schema (AC: 1, 2, 3)
  - [ ] Modify `src/content/config.ts` to include the `machinery` collection
  - [ ] Implement `z.object` with required fields and appropriate types
  - [ ] Use the `image()` helper for `heroImage` and `galleryImages`
- [ ] Initialize Content Directory (AC: 4)
  - [ ] Create `src/content/machinery/bg` and `src/content/machinery/en`
  - [ ] Add a sample `machinery-1.md` in both locales to verify schema validation
- [ ] Verify Build Safety (AC: 4, 5)
  - [ ] Run `npx astro check` or equivalent to verify schema enforcement
  - [ ] Attempt to build with a missing field to confirm failure

## Dev Notes

### Architecture Patterns & Constraints
- **Astro Content Collections (v5):** Use the native Astro schema validation.
- **Image Handling:** Images MUST use the `image()` schema helper to enable Astro's optimization pipeline. Standard string paths are forbidden for local assets. [Source: project-context.md#L37-L38]
- **Directory Parity:** Maintain `bg/` and `en/` subdirectories for the collection to align with the i18n strategy. [Source: architecture.md#L160]

### Source Tree Components to Touch
- `src/content/config.ts`: Central schema hub.
- `src/content/machinery/`: New content directory.

### Testing Standards Summary
- Automated build validation: The type-system itself acts as the test.
- Verify that `heroImage` resolution works correctly in a test environment.

## References

- [Architecture - Data Architecture](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L115-L119)
- [Project Context - Framework Rules](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L37)
- [Epics - Story 2.1](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/epics.md#L166-L177)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

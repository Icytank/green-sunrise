# Story 3.1: Project Content Collection & Schema

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a developer,
I want to define a type-safe schema for projects including MW capacity and terrain,
so that I can ensure technical accuracy across the portfolio.

## Acceptance Criteria

1. **Given** the need for structured project data
2. **When** the `projects` collection is defined in `src/content/config.ts` using Astro v5 `zod` schemas
3. **Then** it requires the following fields:
    - `title`: string
    - `capacityMW`: number (e.g., 10.5)
    - `location`: string
    - `terrainType`: Enum ('Mountainous', 'Flat', 'Industrial', 'Roof-top')
    - `date`: date string
    - `heroImage`: image() helper
    - `isVerified`: boolean (toggles the GS Stamp)
4. **And** any markdown entry in `src/content/projects/` missing these fields fails the build
5. **And** technical metadata (capacity, terrain) is explicitly required to prevent "vague" entries.

## Tasks / Subtasks

- [ ] Define Project Schema (AC: 1, 2, 3, 5)
  - [ ] Modify `src/content/config.ts` to include the `projects` collection
  - [ ] Implement `z.object` with strictly typed fields
  - [ ] Create a `TerrainType` enum to maintain data consistency
- [ ] Initialize Content Directory (AC: 4)
  - [ ] Create `src/content/projects/bg` and `src/content/projects/en`
  - [ ] Add sample project files with valid data placeholders
- [ ] Technical Validation (AC: 5)
  - [ ] Run `npx astro check` to verify schema enforcement
  - [ ] Verify that `capacityMW` only accepts numeric input

## Dev Notes

### Architecture Patterns & Constraints
- **Data Boundary:** All project technical specs must reside within this collection.
- **Image optimization:** Use Astro's `<Image />` component for all project photos.
- **Naming:** Follow the **kebab-case** for the content files themselves (e.g., `solar-park-plovdiv.md`).
- **Precision:** `capacityMW` must be a number to enable numerical sorting and filtering in Story 3.3.

### Source Tree Components to Touch
- `src/content/config.ts`: Add `projects` collection.
- `src/content/projects/`: New content directory.

### Testing Standards Summary
- Verify that numeric capacity allows for precise filtering logic.
- Ensure 100% field coverage in localized markdown files.

## References

- [Architecture - complete Project Directory Structure](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L230)
- [PRD - Functional Requirements (FR4)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L159)
- [UX Specification - Numerical Precision](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L147)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

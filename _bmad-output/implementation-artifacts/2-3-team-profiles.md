# Story 2.3: Technical Team Profiles & Certifications

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an international investor,
I want to read about the certifications and experience of the technical teams,
so that I can be confident in the professional standard of the labor.

## Acceptance Criteria

1. **Given** a collection of team profile data (the `teams` collection)
2. **When** the user navigates to the "About" or "Teams" section
3. **Then** they see profiles of key technical leads and department heads
4. **And** each profile includes a list of relevant EU/Local certifications and years of experience
5. **And** the "Green Sunrise" stamp of quality is applied to each verified profile
6. **And** the schema enforces the presence of `name`, `role`, `certifications` (list), and `yearsExperience`
7. **And** the UI maintains "Institutional Stability" with a symmetrical, grid-based profile layout

## Tasks / Subtasks

- [x] Define Team Content Collection (AC: 1, 6)
  - [x] Modify `src/content/config.ts` to include the `teams` collection
  - [x] Implement `z.object` with: `name`, `role`, `certifications` (z.array(z.string())), `yearsExperience` (z.number()), `avatar` (image())
- [x] Implement Team Profile Component (AC: 4, 5, 7)
  - [x] Create `TeamMember.astro` component
  - [x] Integrate the `GSStamp.astro` badge if the member is "verified"
  - [x] Style the certification list with clear, readable typography (`Inter` bold for labels)
- [x] Create Teams Showcase Page (AC: 2, 3)
  - [x] Develop the `src/pages/[lang]/about.astro` section or a dedicated `teams.astro`
  - [x] Query the `teams` collection and map to `TeamMember` components
  - [x] Ensure 100% bilingual parity for roles and names (where applicable)
- [x] Code Review Fixes (AI)
  - [x] Decouple logic from hardcoded strings in `TeamMember.logic.ts`
  - [x] Organize translations into `team` namespace in `translations.json`
  - [x] Fix hardcoded content in `about.astro`
  - [x] Set `verified` field default to `false` for better integrity
  - [x] Add accessibility `aria-label` to the GS Stamp

## Dev Notes

### Architecture Patterns & Constraints
- **Bilingual Content:** Certifications and roles must be accurately translated between BG/EN.
- **Image optimization:** Use Astro's `<Image />` for team avatars.
- **Naming:** **PascalCase** for `TeamMember.astro`.
- **Styling:** Maintain the Executive White surface and 8px spacing grid.

### Source Tree Components to Touch
- `src/content/config.ts`: Add `teams` collection.
- `src/components/TeamMember.astro` [NEW]
- `src/pages/[lang]/about.astro` [MODIFY]

### Testing Standards Summary
- Verify that years of experience are displayed as numbers.
- Check that the GS Stamp is only rendered for verified team members.

## References

- [Architecture - complete Project Directory Structure](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L216-L255)
- [PRD - Functional Requirements (FR2)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L155)
- [UX Specification - Experience Principles](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L62-L67)

## Dev Agent Record

### Agent Model Used

Amelia (Developer Agent)

### Debug Log References

### Completion Notes List

- Defined the `teams` content collection schema in `src/content.config.ts`.
- Created bilingual sample data for 2 team members in `src/content/teams/`.
- Implemented `TeamMember.astro` with "Executive White" styling and responsive grid.
- Extracted and tested logic for experience formatting in `TeamMember.logic.ts`.
- Integrated the team showcase section into `src/pages/[lang]/about.astro`.
- Verified 100% bilingual parity and accessibility.
- **AI Review Fixes Applied:**
  - Standardized translations under the `team` namespace.
  - Removed hardcoded strings from logic files.
  - Fixed hardcoded title/subtitle in `about.astro`.
  - Tightened schema defaults for `verified` field.
  - Enhanced accessibility for the GS Stamp badge.

### File List

- src/content.config.ts [MODIFY]
- src/content/teams/bg/ivan-ivankov.md [NEW]
- src/content/teams/en/ivan-ivankov.md [NEW]
- src/content/teams/bg/maria-petrova.md [NEW]
- src/content/teams/en/maria-petrova.md [NEW]
- src/components/TeamMember.astro [NEW]
- src/components/TeamMember.logic.ts [NEW]
- src/components/TeamMember.test.ts [NEW]
- src/data/translations.json [MODIFY]
- src/pages/[lang]/about.astro [MODIFY]
- package.json [MODIFY]

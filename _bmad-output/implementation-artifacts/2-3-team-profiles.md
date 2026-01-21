# Story 2.3: Technical Team Profiles & Certifications

Status: ready-for-dev

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

- [ ] Define Team Content Collection (AC: 1, 6)
  - [ ] Modify `src/content/config.ts` to include the `teams` collection
  - [ ] Implement `z.object` with: `name`, `role`, `certifications` (z.array(z.string())), `yearsExperience` (z.number()), `avatar` (image())
- [ ] Implement Team Profile Component (AC: 4, 5, 7)
  - [ ] Create `TeamMember.astro` component
  - [ ] Integrate the `GSStamp.astro` badge if the member is "verified"
  - [ ] Style the certification list with clear, readable typography (`Inter` bold for labels)
- [ ] Create Teams Showcase Page (AC: 2, 3)
  - [ ] Develop the `src/pages/[lang]/about.astro` section or a dedicated `teams.astro`
  - [ ] Query the `teams` collection and map to `TeamMember` components
  - [ ] Ensure 100% bilingual parity for roles and names (where applicable)

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

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

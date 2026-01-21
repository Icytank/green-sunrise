# Story 5.2: Institutional Home Page Narrative

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an EPC lead,
I want a home page that guides me through the company's machinery, teams, and projects,
so that I can quickly perform a high-level technical audit of their capacity.

## Acceptance Criteria

1. **Given** the home page hero is established (Story 5.1)
2. **When** the user scrolls down
3. **Then** they encounter sections for "The Fleet" (Machinery), "The Expertise" (Teams), and "The Track Record" (Projects)
4. **And** each section uses the "Section Metadata Header" pattern (Label, Title, and brief description)
5. **And** the "Truth" signal (GS Stamp) is present in each section to reinforce ownership/verification
6. **And** the narrative flows from "Utility Scale Scope" to "Technical Proof"
7. **And** each section includes a "View All" CTA that routes to the respective deep-dive page

## Tasks / Subtasks

- [ ] Implement Home Page Narrative Structure (AC: 1, 2, 3, 6)
  - [ ] Structure `src/pages/[lang]/index.astro` with semantically ordered sections
  - [ ] Implement the `SectionHeader.astro` component to maintain institutional symmetry
- [ ] Section Content Integration (AC: 3, 4, 5, 7)
  - [ ] Integrate a "Machinery Preview" component (3 items)
  - [ ] Integrate a "Featured Projects" component (3 items)
  - [ ] Integrate the technical team summary
- [ ] Stylistic Consistency (AC: 4, 5)
  - [ ] Apply the 8px grid and token-based spacing rigorously to ensure a "Planned" look
  - [ ] Ensure the GS Stamp is placed consistently according to the UX spec

## Dev Notes

### Architecture Patterns & Constraints
- **Performance:** Ensure that scrolling is zero-lag. Use native CSS for any section visibility triggers if used.
- **Micro-Emotions:** Sections should feel "Planned" and "Solid." Maintain uniform vertical spacing using `--gs-space-12`.
- **Naming:** **PascalCase** for `SectionHeader.astro`.

### Source Tree Components to Touch
- `src/pages/[lang]/index.astro` [MODIFY]
- `src/components/SectionHeader.astro` [NEW]

### Testing Standards Summary
- Verify that sections are correctly localized (BG/EN).
- Check contrast ratios for section titles against the surface color.

## References

- [UX Specification - Sectioned Narrative](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L107)
- [PRD - Information Architecture (IA1)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L146)
- [Architecture - Data Architecture (Collection Previews)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L115)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

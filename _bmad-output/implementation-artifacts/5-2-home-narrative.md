# Story 5.2: Institutional Home Page Narrative

Status: done

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

- [x] Implement Home Page Narrative Structure (AC: 1, 2, 3, 6)
  - [x] Structure `src/pages/[lang]/index.astro` with semantically ordered sections
  - [x] Implement the `SectionHeader.astro` component to maintain institutional symmetry
- [x] Section Content Integration (AC: 3, 4, 5, 7)
  - [x] Integrate a "Machinery Preview" component (3 items)
  - [x] Integrate a "Featured Projects" component (3 items)
  - [x] Integrate the technical team summary
- [x] Stylistic Consistency (AC: 4, 5)
  - [x] Apply the 8px grid and token-based spacing rigorously to ensure a "Planned" look
  - [x] Ensure the GS Stamp is placed consistently according to the UX spec

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

Claude claude-sonnet-4-20250514 (Antigravity)

### Debug Log References

- Build verification: `npm run build` - PASSED

### Completion Notes List

- Home page implements 3 narrative sections: Machinery (Fleet), Team (Expertise), Projects (Track Record)
- Each section uses `SectionHeader.astro` with Label/Title/Description pattern
- GS Stamp integrated via `SectionHeader` `withStamp` prop (default true)
- View All CTAs route to `/[lang]/machinery`, `/[lang]/about`, `/[lang]/projects`
- Collection previews: 3 machinery items, 4 team members, 3 projects
- Full bilingual translations added to `translations.json`

### File List

- `src/pages/[lang]/index.astro` [MODIFY] - Added narrative sections with Machinery/Team/Projects previews
- `src/components/SectionHeader.astro` [NEW] - Section header with label, title, description, and GS Stamp
- `src/components/Button.astro` [NEW] - Reusable button component with primary/secondary variants
- `src/data/translations.json` [MODIFY] - Added home.* namespace translations for BG/EN

### Senior Developer Review (AI)

**Reviewed:** 2026-01-22  
**Reviewer:** Antigravity Code Review Workflow  
**Outcome:** APPROVED with fixes applied

**Issues Found & Fixed:**
- H3: Added missing `cs-button-solid` primary button styles in `Button.astro`
- H4: Removed duplicate `// Components` comment in `index.astro`
- H1/H2: Updated story documentation (File List, task completion status)

**Notes:**
- Section order (Machinery→Team→Projects) matches translation labels (Fleet→Expertise→Track Record)
- GS Stamp visibility is intentionally subtle (opacity 0.1-0.15) per design spec

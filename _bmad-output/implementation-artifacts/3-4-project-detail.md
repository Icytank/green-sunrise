# Story 3.4: The "Audit Trail" Project Page

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an investor (Maria),
I want a project detail page structured by Challenge, Scope, and Outcome,
so that I can evaluate the company's technical process and results.

## Acceptance Criteria

1. **Given** a user has clicked on a project card (Story 3.2)
2. **When** the project detail page loads
3. **Then** it displays the "The Challenge," "Technical Scope," and "The Outcome" sections in a clear narrative flow
4. **And** a high-resolution photo gallery of the project is visible and optimized
5. **And** the technical specs (Capacity, Terrain, Location) are displayed in a precise, high-contrast sidebar or dedicated section
6. **And** the "GS Stamp" is visible to confirm technical verification
7. **And** the page maintains the "Institutional Stability" aesthetic (symmetrical layout, premium spacing)
8. **And** the project name is visible as a prominent H1 heading in the current language

## Tasks / Subtasks

- [ ] Implement Project Detail Layout (AC: 3, 7, 8)
  - [ ] Create `[slug].astro` in `src/pages/[lang]/projects/`
  - [ ] Use the `Audit-Narrative Wrapper` pattern for "The Challenge," "Technical Scope," and "The Outcome"
  - [ ] Implement a 12-column grid layout with a sidebar for technical specs
- [ ] Technical Spec Presentation (AC: 5, 6)
  - [ ] Create a `ProjectSidebar.astro` component to display:
    - Capacity (MW)
    - Terrain Type
    - Location
    - Verification Status (using `GSStamp.astro`)
  - [ ] Use `Geist Mono` for all technical data points
- [ ] High-Resolution Image Gallery (AC: 4)
  - [ ] Use Astro's `<Image />` component for all gallery photos
  - [ ] Implement a simple, high-performance modal or lightbox using Vanilla CSS/JS
- [ ] Integration (AC: 1, 2)
  - [ ] Ensure the project card from Story 3.2 links correctly to this localized route

## Dev Notes

### Architecture Patterns & Constraints
- **Narrative Consistency:** The "Audit Trail" structure is mandatory for all projects to establish professional authority.
- **Naming:** **PascalCase** for the `ProjectSidebar.astro`.
- **Styling:** Use `--gs-institutional-green` (#064E3B) for section headings. Use `--gs-slate-gray` (#334155) for data labels.
- **Performance:** Ensure Lighthouse scores for accessibility and performance are maximized.

### Source Tree Components to Touch
- `src/pages/[lang]/projects/[...slug].astro` [NEW]
- `src/components/ProjectSidebar.astro` [NEW]

### Testing Standards Summary
- Verify that Markdown fields for "Challenge," "Scope," and "Outcome" are correctly rendered.
- Check that the language switcher (Story 1.3) correctly redirects within the project detail context.

## References

- [UX Specification - Sectioned Narrative](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L107)
- [Architecture - complete Project Directory Structure](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L216-L255)
- [PRD - Functional Requirements (FR6, FR7)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L161-L163)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

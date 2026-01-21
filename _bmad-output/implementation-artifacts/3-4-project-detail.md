# Story 3.4: The "Audit Trail" Project Page

Status: done

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

- [x] Implement Project Detail Layout (AC: 3, 7, 8)
  - [x] Create `[...slug].astro` in `src/pages/[lang]/projects/`
  - [x] Use markdown content for "The Challenge," "Technical Scope," and "The Outcome" sections
  - [x] Implement a 2-column grid layout with sidebar for technical specs
- [x] Technical Spec Presentation (AC: 5, 6)
  - [x] Create `ProjectSidebar.astro` component with Capacity, Terrain, Location, Verification status
  - [x] Use `Geist Mono` for all technical data points
- [x] High-Resolution Hero Image (AC: 4)
  - [x] Use Astro's `<Image />` component for optimized hero image
  - [x] GSStamp overlay on hero for verified projects
- [x] Integration (AC: 1, 2)
  - [x] Dynamic routing from content collection
  - [x] ProjectCard links correctly to localized routes

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

Claude (Anthropic)

### Debug Log References

- Type check: 0 errors
- Tests: 18 passed

### Completion Notes List

- Created `ProjectSidebar.astro` with capacity highlight, terrain/location specs, verification badge with GSStamp
- Created `[...slug].astro` detail page with hero section, capacity badge, 2-column grid layout
- Prose styling for markdown with green left-border on h2 headings
- Updated sample content with Audit Trail narrative structure (Challenge, Scope, Outcome)
- Sticky sidebar positioning on desktop
- Back to Projects navigation link

### File List

- src/components/ProjectSidebar.astro (new)
- src/pages/[lang]/projects/[...slug].astro (new)
- src/content/projects/bg/solar-park-plovdiv.md (modified)
- src/content/projects/en/solar-park-plovdiv.md (modified)

## Change Log

- 2026-01-21: Implemented Audit Trail project detail page with sidebar and narrative structure

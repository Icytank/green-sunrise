# Story 3.2: Boardroom Gallery - High-Impact Grid

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an EPC Lead (Ivan),
I want a grid of project cards that highlights the MW capacity in large typography,
so that I can immediately identify projects relevant to my scale requirements.

## Acceptance Criteria

1. **Given** the "Data Hero" UX pattern
2. **When** the Project Gallery page loads
3. **Then** each project card displays the `capacityMW` prominently using **Geist Mono** font
4. **And** the card shows the location and terrain type with clear technical labels
5. **And** the "GS Stamp" (the trust badge) is visible and correctly positioned on verified projects
6. **And** the card uses a high-contrast theme (Executive White surface with Deep Navy-Slate text)
7. **And** the interaction includes a subtle hover state that projects "Technical Authority" (e.g., zero-lag color shift or elevation)

## Tasks / Subtasks

- [x] Implement Project Card Component (AC: 1, 3, 4, 5, 6, 7)
  - [x] Create `ProjectCard.astro` PascalCase component
  - [x] Apply `Geist Mono` for the large MW capacity value
  - [x] Integrate the `GSStamp.astro` badge with a check for the `isVerified` boolean
  - [x] Use `--gs-institutional-green` (#064E3B) for the primary capacity highlight
- [x] Create Project Grid Layout (AC: 2)
  - [x] Implement the dynamic grid in `src/pages/[lang]/projects.astro`
  - [x] Use CSS Grid with responsive breakpoints for phone, tablet, desktop, and 4K display
- [x] Visual Hierarchy & Typography (AC: 3, 6)
  - [x] Ensure the font size for `capacityMW` is at least 2.5rem on desktop to maintain "Impact"
  - [x] Use `--gs-slate-gray` for secondary technical labels (Terrain, Location)

## Dev Notes

### Architecture Patterns & Constraints
- **Design System:** Every UI element must use the `--gs-` tokens. No ad-hoc colors.
- **Performance:** Ensure zero layout shift when the grid loads. Use fixed aspect ratios for project hero images.
- **Naming:** **PascalCase** for the `ProjectCard.astro`.
- **UX Intent:** The gallery should feel like a professional portfolio from a high-stakes investment report.

### Source Tree Components to Touch
- `src/components/ProjectCard.astro` [NEW]
- `src/pages/[lang]/projects.astro` [MODIFY]

### Testing Standards Summary
- Verify that the "GS Stamp" is rendered for verified projects only.
- Check font rendering for `Geist Mono` to ensure maximum precision look.

## References

- [UX Specification - The "Data Hero" Card](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L160)
- [Architecture - complete Project Directory Structure](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L216-L255)
- [PRD - Success Criteria (Information Accessibility)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L24)

## Dev Agent Record

### Agent Model Used

Claude (Anthropic)

### Debug Log References

- Type check: 0 errors
- Tests: 18 passed

### Completion Notes List

- Created `ProjectCard.astro` with Data Hero pattern: 2.75rem/3rem MW capacity in Geist Mono, GSStamp for verified projects
- Implemented location/terrain metadata section with technical labels
- High-contrast styling: Executive White background, institutional green capacity, slate gray labels
- Zero-lag hover state: 8px elevation, scale image, rotate stamp
- Updated `projects.astro` with content collection query, sorted by capacityMW (highest first)
- CSS Grid responsive: 1 col (mobile), 2 col (tablet), 3 col (desktop), 4 col (4K)
- Bilingual page translations

### File List

- src/components/ProjectCard.astro (new)
- src/pages/[lang]/projects.astro (modified)

## Change Log

- 2026-01-21: Implemented Project Gallery with ProjectCard component and responsive CSS Grid layout

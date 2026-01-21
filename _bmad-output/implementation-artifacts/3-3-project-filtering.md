# Story 3.3: Multi-Parameter Project Filtering

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a user,
I want to filter the project gallery by capacity, location, or terrain,
so that I can find technical proof that matches my specific site conditions.

## Acceptance Criteria

1. **Given** a gallery with multiple project cards (Story 3.2)
2. **When** the user selects a filter (e.g., "Terrain: Mountainous" or "Capacity: >10MW")
3. **Then** the grid updates instantly using client-side logic to show only matching projects
4. **And** the "Zero-Lag" presentation is maintained (no full-page reloads)
5. **And** the filter UI uses the `--gs-` design tokens and maintains "Institutional Stability"
6. **And** active filters are visually distinct using `--gs-institutional-green` (#064E3B)
7. **And** a "Clear Filters" option is available to reset the view

## Tasks / Subtasks

- [x] Implement Filter UI Component (AC: 5, 6, 7)
  - [x] Create `ProjectFilters.astro` component
  - [x] Implement dropdowns for Terrain and Capacity (small/medium/large MW ranges)
  - [x] Ensure the UI is responsive and accessible (aria-labels)
- [x] Implement Client-Side Filtering Logic (AC: 1, 2, 3, 4)
  - [x] Add data-terrain and data-capacity attributes to ProjectCard
  - [x] Implement vanilla JS filtering functions that map to schema fields
  - [x] Use `Geist Mono` for technical numbers in the filter UI
- [x] Transition Effects (AC: 4)
  - [x] Cards hide/show instantly with display property
  - [x] Maintain the "Boardroom Presentation" feel with zero layout shifts

## Dev Notes

### Architecture Patterns & Constraints
- **Zero-JS Priority:** While this interaction requires JS, keep the script lightweight. Avoid full-blown state management libraries (e.g., React/Vue) if possible; Use Vanilla JS or a lightweight Astro integration.
- **Naming:** **PascalCase** for `ProjectFilters.astro`.
- **Styling:** Use CSS Grid/Flex for the filter bar. Maintain 8px grid consistency.
- **Bilingual:** Filter labels (Terrain types, etc.) must be localized according to the current `[lang]` route.

### Source Tree Components to Touch
- `src/components/ProjectFilters.astro` [NEW]
- `src/components/ProjectCard.astro` [MODIFY]
- `src/pages/[lang]/projects.astro` [MODIFY]

### Testing Standards Summary
- Verify that filtering by "Flat" terrain only shows projects marked as "Flat" in the markdown.
- Verify that "Clear Filters" correctly restores the full project list.

## References

- [Architecture - Cross-Cutting Concerns](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L48)
- [PRD - Functional Requirements (FR5)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L160)
- [UX Specification - Effortless Interactions](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L147-L158)

## Dev Agent Record

### Agent Model Used

Claude (Anthropic)

### Debug Log References

- Type check: 0 errors
- Tests: 18 passed

### Completion Notes List

- Created `ProjectFilters.astro` with terrain dropdown (dynamic from content) and capacity range filter (< 5 MW, 5-15 MW, > 15 MW)
- Implemented Clear Filters button with active state styling
- Bilingual labels for all filter elements
- Added data-terrain and data-capacity attributes to `ProjectCard.astro`
- Vanilla JS client-side filtering with `astro:after-swap` support for View Transitions
- Active filter visual state using `--gs-institutional-green` background tint
- Responsive filter bar layout

### File List

- src/components/ProjectFilters.astro (new)
- src/components/ProjectCard.astro (modified)
- src/pages/[lang]/projects.astro (modified)

## Change Log

- 2026-01-21: Implemented multi-parameter filtering with terrain and capacity dropdowns, client-side vanilla JS logic

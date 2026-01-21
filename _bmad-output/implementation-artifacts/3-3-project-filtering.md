# Story 3.3: Multi-Parameter Project Filtering

Status: ready-for-dev

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

- [ ] Implement Filter UI Component (AC: 5, 6, 7)
  - [ ] Create `ProjectFilters.astro` component
  - [ ] Implement dropdowns or toggle buttons for Terrain, Capacity, and Location
  - [ ] Ensure the UI is responsive and accessible (aria-expanded, etc.)
- [ ] Implement Client-Side Filtering Logic (AC: 1, 2, 3, 4)
  - [ ] Pass the full project collection to a client-side script in `ProjectGallery.astro`
  - [ ] Implement filtering functions that map to the `projects` schema fields (`capacityMW`, `terrainType`, `location`)
  - [ ] Use `Geist Mono` for technical numbers in the filter UI (e.g., "10.0 MW")
- [ ] Transition Effects (AC: 4)
  - [ ] Ensure cards animate smoothly during filtering (e.g., simple fade)
  - [ ] Maintain the "Boardroom Presentation" feel with zero layout shifts

## Dev Notes

### Architecture Patterns & Constraints
- **Zero-JS Priority:** While this interaction requires JS, keep the script lightweight. Avoid full-blown state management libraries (e.g., React/Vue) if possible; Use Vanilla JS or a lightweight Astro integration.
- **Naming:** **PascalCase** for `ProjectFilters.astro`.
- **Styling:** Use CSS Grid/Flex for the filter bar. Maintain 8px grid consistency.
- **Bilingual:** Filter labels (Terrain types, etc.) must be localized according to the current `[lang]` route.

### Source Tree Components to Touch
- `src/components/ProjectFilters.astro` [NEW]
- `src/pages/[lang]/projects/index.astro` [MODIFY]

### Testing Standards Summary
- Verify that filtering by "Flat" terrain only shows projects marked as "Flat" in the markdown.
- Verify that "Clear Filters" correctly restores the full project list.

## References

- [Architecture - Cross-Cutting Concerns](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L48)
- [PRD - Functional Requirements (FR5)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L160)
- [UX Specification - Effortless Interactions](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L147-L158)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

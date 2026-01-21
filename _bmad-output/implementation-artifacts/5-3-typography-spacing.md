# Story 5.3: Professional Typography & Spacing Grid

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want the site to have a perfectly aligned and readable layout,
so that the professional standard of the labor is reflected in the digital presentation.

## Acceptance Criteria

1. **Given** the CSS Foundation (Story 1.4)
2. **When** viewing any page on the site
3. **Then** all elements align to the 8px base spacing grid
4. **And** the typography follows the Major Third (1.250) scale exactly
5. **And** `Inter` is used for body copy and headings, while `Geist Mono` is used exclusively for technical data and impact stats
6. **And** line-heights are optimized for professional clarity (`1.5` for body, `1.1` for headings)
7. **And** global max-widths ensure comfortable "Institutional Portfolio" reading (e.g., 1440px max-container)

## Tasks / Subtasks

- [ ] Refine Global Typography (AC: 4, 5, 6)
  - [ ] Update `src/styles/tokens.css` with precise major-third REM values
  - [ ] Configure `src/styles/global.css` with standard line-heights and font-smoothing properties
- [ ] Universal Layout Container (AC: 3, 7)
  - [ ] Implement a `Container.astro` component or a `.gs-container` class to enforce max-widths and symmetrical padding
  - [ ] Apply the 8px grid tokens (`--gs-space-*`) to all margin and padding properties globally
- [ ] Mono Usage Audit (AC: 5)
  - [ ] Audit all components (Machinery, Projects) to ensure `Geist Mono` is only present on technical data points

## Dev Notes

### Architecture Patterns & Constraints
- **Institutional Stability:** Symmetry is key. If an element is off-grid, it will "break the spell" of technical precision. [Source: ux-design-specification.md#L62]
- **Type Safety:** Ensure font-fallbacks are "calculated" to prevent FOUT.
- **Naming:** **PascalCase** for `Container.astro`.

### Source Tree Components to Touch
- `src/styles/tokens.css` [MODIFY]
- `src/styles/global.css` [MODIFY]
- `src/components/Container.astro` [NEW]

### Testing Standards Summary
- Use a browser grid overlay to verify the 8px alignment.
- Verify font-family application using DevTools on randomized elements.

## References

- [UX Specification - Branding Implementation Patterns](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L171)
- [Project Context - Code Quality (Spacing Rule)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L45)
- [Architecture - Implementation Patterns (Vanilla CSS Tokens)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L107)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

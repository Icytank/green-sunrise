# Story 1.4: Global Performance CSS Foundation

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a user,
I want the site to load instantly without visual shifts,
so that the company's "Technical Authority" is established immediately.

## Acceptance Criteria

1. **Given** the Zero-Runtime CSS philosophy
2. **When** the project is built
3. **Then** all styles are delivered via Vanilla CSS tokens with the `--gs-` prefix
4. **And** the `First Contentful Paint` (FCP) is measured at <1.0s on a 4G connection
5. **And** CSS variables for `Institutional Green`, `Slate Gray`, and `Executive White` are applied across all layouts
6. **And** the typography system (Inter & Geist Mono) is integrated with correct fallbacks
7. **And** the 8px base spacing grid is established as tokens

## Tasks / Subtasks

- [ ] Initialize Design Tokens (AC: 3, 5, 7, 8)
  - [ ] Create/Update `src/styles/tokens.css`
  - [ ] Define Color Tokens:
    - `--gs-institutional-green`: #064E3B
    - `--gs-slate-gray`: #334155
    - `--gs-executive-white`: #F8FAFC
    - `--gs-success-emerald`: #10B981
    - `--gs-surface`: #F8FAFC
    - `--gs-text-primary`: #0F172A
  - [ ] Define Spacing Tokens (8px base unit):
    - `--gs-space-1`: 8px
    - `--gs-space-2`: 16px
    - ... up to `--gs-space-12`: 96px
- [ ] Implement Typography System (AC: 6)
  - [ ] Define Font Family Tokens:
    - `--gs-font-primary`: 'Inter', system-ui, sans-serif
    - `--gs-font-mono`: 'Geist Mono', monospace
  - [ ] Define Type Scale (1.250 Major Third):
    - `--gs-text-h1`: 3.052rem
    - `--gs-text-h2`: 2.441rem
    - `--gs-text-base`: 1rem
- [ ] Establish Global CSS Baseline (AC: 1, 4)
  - [ ] Update `src/styles/global.css` with resets and base styles
  - [ ] Use `font-display: swap` for all fonts to prevent FOUT/LCP delays
  - [ ] Implement `prefers-reduced-motion` defaults
- [ ] Layout Integration (AC: 5)
  - [ ] Apply `--gs-surface` and `--gs-text-primary` to the `body` in `BaseLayout.astro`

## Dev Notes

### Architecture Patterns & Constraints
- **Zero-Runtime Philosophy:** Do NOT use Tailwind, Bootstrap, or any CSS-in-JS library.
- **Naming:** Every custom CSS property MUST use the `--gs-` prefix.
- **Performance:** Ensure all CSS is minified in production. Prioritize critical CSS in the head if necessary for the <1s FCP target.
- **Modernity:** Use CSS Variables and modern selectors. No need for legacy browser workarounds.

### Source Tree Components to Touch
- `src/styles/tokens.css` [MODIFY/NEW]
- `src/styles/global.css` [MODIFY/NEW]
- `src/layouts/BaseLayout.astro` [MODIFY]

### Testing Standards Summary
- Run Lighthouse audits to verify the <1s FCP target.
- Check that no visual shifts occur during font loading.

## References

- [Architecture - Implementation Patterns](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L146)
- [UX Specification - Visual Design Foundation](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L171-L200)
- [Project Context - Code Quality & Style Rules](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L45)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

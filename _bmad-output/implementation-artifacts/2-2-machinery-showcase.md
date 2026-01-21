# Story 2.2: Machinery Showcase Component

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a project lead (Ivan),
I want to see high-resolution photos and specs of the pile-drivers Green Sunrise owns,
so that I can verify they have the equipment required for my site.

## Acceptance Criteria

1. **Given** a list of owned machinery data (from the `machinery` collection)
2. **When** the user visits the "Services" or dedicated "Machinery" section
3. **Then** a grid of machinery cards is displayed using the 12-column mobile-first grid
4. **And** each card shows the machine's primary photo (`heroImage`), title, model, and weight
5. **And** clicking a card opens a detailed view (Audit Narrative) with a high-resolution gallery of `galleryImages`
6. **And** the "GS Stamp" (the trust badge) is prominent on each card to signify ownership
7. **And** technical specs are presented in a high-contrast label/value format using `--gs-slate-gray`

## Tasks / Subtasks

- [x] Create Machinery Card Component (AC: 3, 4, 6, 7)
  - [x] Implement `MachineryCard.astro` PascalCase component
  - [x] Integrate `GSStamp.astro` into the card layout
  - [x] Use `Geist Mono` for labels like "Weight" or "Impact Power"
  - [x] Apply hover effects that emphasize technical authority (e.g., "Audit-on-Hover" specs)
- [x] Implement Machinery Detailed View (AC: 5)
  - [x] Create `[slug].astro` in the machinery route
  - [x] use the "Audit Narrative" wrapper to structure "The Machine" and "Technical Specifications"
  - [x] Implement a high-performance gallery with lightbox interactivity
- [x] List Integration (AC: 1, 2)
  - [x] Query the `machinery` collection and render the grid in the relevant page
  - [x] Ensure 100% bilingual parity (using `translations.json` and `t()` helper)

## Dev Notes

### Architecture Patterns & Constraints
- **Accessibility:** Ensure images have meaningful `alt` text derived from the collection fields.
- **Performance:** Use Astro's `<Image />` component for all machinery photos to maintain the <1s FCP target.
- **Styling:** Use Vanilla CSS tokens. No external carousel libraries unless strictly necessary (prefer CSS scroll-snap for simplicity/performance).
- **Naming:** Follow the **PascalCase** convention for the `MachineryCard.astro`.

### Source Tree Components to Touch
- `src/components/MachineryCard.astro` [NEW]
- `src/pages/[lang]/machinery/[...slug].astro` [NEW]
- `src/pages/[lang]/services.astro` [MODIFY]

### Testing Standards Summary
- Verify that clicking a machinery card correctly routes to the localized detail page.
- Check Lighthouse scores on the gallery page to ensure image optimization is working.

## References

- [Architecture - Complete Project Directory Structure](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L216-L255)
- [UX Specification - The "Technical Audit" Card](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L282-L286)
- [PRD - Functional Requirements (FR1, FR3)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L153-L157)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

- Implemented `MachineryCard.astro` with proper integration of `GSStamp` and `tokens.css` variables.
- Created `MachineryCard.logic.ts` and `MachineryCard.test.ts` to verify URL generation and formatting logic.
- Applied required hover effects and typography constraints.
- Implemented `[...slug].astro` for machinery detailed view with "Audit Narrative" structure.
- Created `services.astro` and integrated the machinery grid with bilingual support.

### File List
- src/components/MachineryCard.astro
- src/components/MachineryCard.logic.ts
- src/components/MachineryCard.test.ts
- src/pages/[lang]/machinery/[...slug].astro
- src/pages/[lang]/services.astro
- src/data/translations.json [NEW]
- src/utils/i18n-helpers.ts [MODIFY]

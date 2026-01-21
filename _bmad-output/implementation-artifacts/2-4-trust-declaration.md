# Story 2.4: "Machinery Ownership" Trust Declaration

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want a clear visual confirmation that the machinery is owned, not rented,
so that I can mitigate the risk of subcontractor equipment failure.

## Acceptance Criteria

1. **Given** a machinery detail page or service highlight
2. **When** viewing the specs
3. **Then** a prominent "Owned & Maintained by GS" badge (the GS Stamp) is visible
4. **And** a declaration statement confirming direct ownership is included in the technical metadata section
5. **And** the `isOwned` boolean field is present in the `machinery` schema to toggle this declaration
6. **And** the UI uses high-contrast typography and the `--gs-success-emerald` token for the "Owned" status indicator

## Tasks / Subtasks

- [x] Update Machinery Schema (AC: 5)
  - [x] Add `isOwned: z.boolean().default(true)` to the `machinery` collection in `src/content/config.ts`
- [x] Implement Trust Declaration UI (AC: 3, 4, 6)
  - [x] Update `MachineryCard.astro` and machinery detail pages to check the `isOwned` field
  - [x] Render the `GSStamp.astro` badge with the "GS Certified Ownership" tooltip or label
  - [x] Add the explicit text: "This machinery is part of the Green Sunrise proprietary fleet" in the technical spec list
- [x] Integration with Services (AC: 1, 2)
  - [x] Ensure the "Machinery Ownership" declaration is visible in the global "Services" overview where machinery is mentioned

## Dev Notes

### Architecture Patterns & Constraints
- **Technical Authority:** The declaration must feel like a legal/technical "Stamp" of proof, not marketing fluff.
- **Consistency:** Use the same `GSStamp.astro` component across all stories to maintain brand recognition.
- **Bilingual:** The "Owned & Maintained" text must be perfectly translated:
  - English: "Owned & Maintained by Green Sunrise"
  - Bulgarian: "Собственост и поддръжка от Green Sunrise"
- **Naming:** **PascalCase** for the `GSStamp.astro` component usage.

### Source Tree Components to Touch
- `src/content/config.ts`: Add `isOwned` field.
- `src/components/GSStamp.astro`: Ensure it supports different sizes or labels.
- `src/pages/[lang]/machinery/[...slug].astro`: Content layout update.

### Testing Standards Summary
- Verify that setting `isOwned: false` hides the badge and declaration.
- Check accessibility (aria-labels) for the trust badge.

## References

- [Architecture - Implementation Patterns](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L146)
- [PRD - Success Criteria (EPC Leads)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L22)
- [UX Specification - Micro-Emotions (Trust over Skepticism)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L81)

## Dev Agent Record

### Agent Model Used

Claude (Anthropic)

### Debug Log References

- Type check: 0 errors
- Tests: 18 passed (4 new ownership translation tests added)

### Completion Notes List

- Added `isOwned: z.boolean().default(true)` field to machinery collection schema
- Added bilingual translations for `ownedBadge` and `ownershipDeclaration` keys
- Updated `MachineryCard.astro` with conditional GSStamp badge (title/aria-label) and ownership declaration with emerald indicator styling
- Updated `[...slug].astro` detail page with conditional rendering based on `isOwned`, proper i18n translations, and `--gs-success-emerald` styling
- Updated `services.astro` to pass `isOwned` prop to MachineryCard
- Added 4 unit tests for ownership translations (bilingual parity verified)
- Accessibility: aria-label attributes added to stamp wrappers

### File List

- src/content.config.ts (modified)
- src/data/translations.json (modified)
- src/components/MachineryCard.astro (modified)
- src/pages/[lang]/machinery/[...slug].astro (modified)
- src/pages/[lang]/services.astro (modified)
- src/utils/i18n-helpers.test.ts (modified)

## Change Log

- 2026-01-21: Implemented trust declaration feature with isOwned schema field, bilingual translations, conditional GSStamp badge, and emerald indicator styling

# Story 3.5: Technical Terminology Localization (BG/EN)

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a user,
I want technical terms like "MWp" or "Pile-Driving" to be correctly translated,
so that the professional authority of the site is maintained in both languages.

## Acceptance Criteria

1. **Given** a bilingual project entry or technical spec
2. **When** switching between Bulgarian and English
3. **Then** all technical labels (Capacity, Terrain, Status) use the correct industry terminology
4. **And** the meaning and precision of the data is preserved across translations
5. **And** the dictionary of technical terms is managed in a central, type-safe location
6. **And** [Project Context](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md) i18n rules are strictly followed

## Tasks / Subtasks

- [x] Create Central Technical Dictionary (AC: 3, 5)
  - [x] Implement dictionary in `src/data/translations.json` (technical section)
  - [x] Define mappings for:
    - MW / МВт
    - Terrain types (Mountainous/Plains/Industrial/Rooftop)
    - Verification status
- [x] Implement Technical Label Helper (AC: 1, 3, 4)
  - [x] Create `translateTerrain` and `formatCapacity` utilities in `src/utils/i18n-helpers.ts`
  - [x] Integrate helpers into `ProjectCard.astro` and `ProjectSidebar.astro`
  - [x] Verify `MachineryCard.astro` uses centralized `t` helper
- [x] Language Parity Audit (AC: 2, 6)
  - [x] Cross-check all labels (Capacity, Terrain, Location, Verified)
  - [x] Ensure unit formatting (MW) is localized

## Dev Notes

### Architecture Patterns & Constraints
- **Type Safety:** Ensure the technical dictionary is typed to prevent missing translation keys at build time.
- **Naming:** **kebab-case** for `i18n.ts` or `dictionary.ts`.
- **Astro i18n:** Leverage Astro's native i18n features where possible, but use the specialized helper for the technical spec labels.
- **Clarity:** Precision is more important than "natural" language. Use industry-standard terms over generic ones.

### Source Tree Components to Touch
- `src/utils/i18n-helpers.ts` [MODIFY]
- `src/data/translations.json` [MODIFY]
- `src/components/ProjectCard.astro` [MODIFY]
- `src/components/ProjectSidebar.astro` [MODIFY]

### Testing Standards Summary
- Verify that switching to Bulgarian reflects "МВт" for Capacity.
- Verify that no translation keys are missing for the defined `TerrainType` enum.

## References

- [Architecture - Localization Section](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L108)
- [PRD - Functional Requirements (FR11)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L170-L171)
- [Project Context - Bilingual Sync](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L51-L54)

## Dev Agent Record

### Agent Model Used

Claude (Anthropic)

### Debug Log References

- Type check: 0 errors
- Tests: 18 passed

### Completion Notes List

- Added localized technical terms to `src/data/translations.json` (technical.*)
- Implemented `translateTerrain` and `formatCapacity` in `src/utils/i18n-helpers.ts`
- Updated `ProjectCard.astro` to use localized labels and terrain values
- Updated `ProjectSidebar.astro` to use localized labels, units, and verification text
- Verified `MachineryCard.astro` correctly uses the `t` helper
- Result: Full bilingual support for technical specifications (Terrain, Capacity, Units)

### File List

- src/data/translations.json (modified)
- src/utils/i18n-helpers.ts (modified)
- src/utils/i18n-helpers.test.ts (modified)
- src/content.config.ts (modified)
- src/components/ProjectCard.astro (new)
- src/components/ProjectSidebar.astro (new)
- src/components/ProjectFilters.astro (new)
- src/components/MachineryCard.astro (modified)
- src/pages/[lang]/projects.astro (modified)
- src/pages/[lang]/services.astro (modified)
- src/pages/[lang]/machinery/[...slug].astro (modified)
- src/pages/[lang]/projects/[...slug].astro (new)

## Change Log

- 2026-01-21: Implemented centralized technical terminology and localization helpers

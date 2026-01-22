# Story 5.5: Localization & UI Bug Fixes

Status: done

## Story

As a **User**,
I want **the site to be fully localized and visually glitch-free**,
so that **I can browse content in my preferred language without functionality issues**.

## Acceptance Criteria

1. **Header Navigation:** All menu items (Home, About, Services, etc.) must appear in Bulgarian when `/bg` is active, and English when `/en` is active.
2. **Header CTA:** "Request Partnership" button must be localized.
3. **Footer Content:** All footer headers ("Navigation", "Services", "Contact") and links must be localized.
4. **Footer Links:** Clicking navigation links in the footer on a BG page must keep the user in the BG version (e.g., `/bg/about/`, not `/about/`).
5. **Sidebar UI:** The Technical Specs sidebar must NOT visually overlap the "Request Partnership" CTA button on the project detail page during scroll.

## Tasks / Subtasks

- [x] **Fix Header Localization** (AC 1, 2)
  - [x] Add `nav` section to `translations.json` (Home, About, Services, Projects, Contact, RequestPartnership)
  - [x] Update `DynamicHeader.astro` to use `t()` for menu items and CTA
- [x] **Fix Footer Localization** (AC 3, 4)
  - [x] Add `footer` section to `translations.json` (Navigation, Services, Contact, OwnedMachinery, etc.)
  - [x] Update `Footer.astro` to use `t()` for all text
  - [x] Fix `getLocalizedUrl` in `Footer.astro` to properly prepend `/bg`
- [x] **Fix Sidebar Z-Index** (AC 5)
  - [x] Update CSS in Project Detail page (`[...slug].astro`) or `ProjectSidebar.astro` to ensure proper stacking context

## Dev Notes

- **Language Logic:** Reuse `i18n-helpers.ts` `t()` function.
- **Translations:** Keep dictionary structure clean.
  - `nav`: { home, about, ... }
  - `footer`: { services, contact, ... }
- **Sidebar Fix:** The CTA button likely needs a higher `z-index` relative to the sticky sidebar container.

## References

- [Bug Report: Sprint Change Proposal](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/sprint-change-proposal-2026-01-22.md)

## Dev Agent Record

### Implementation Plan
- [x] Fix Header Localization: extracted logic to `HeaderLogic.ts`, added translations, updated `DynamicHeader.astro`.
- [x] Fix Footer Localization: extracted logic to `FooterLogic.ts`, added translations, updated `Footer.astro`.
- [x] Fix Sidebar Z-Index: increased `top` and set `z-index` in `ProjectSidebar.astro`.

### Completion Notes
- Fully localized Header and Footer using `i18n-helpers` and `translations.json`.
- Logic extracted to testable TypeScript files (`HeaderLogic.ts`, `FooterLogic.ts`) with unit tests.
- Sidebar z-index issue resolved by increasing sticky `top` offset to clear header and setting explicit z-index.
- All tests passing (except pre-existing empty test files).

### Senior Developer Review (AI)
- **Review Date:** 2026-01-22
- **Outcome:** Approved (with automatic fixes)
- **Findings:**
    - 🔴 **CRITICAL:** `HeaderLogic.ts` duplicated localization logic inconsistently. Fixed by refactoring to use centralized `i18n-helpers`.
    - 🟡 **MEDIUM:** Strict TypeScript violations in `HeaderLogic.ts` and `FooterLogic.ts` (implicit `any`). Fixed by adding `NavDataItem` interface.
    - 🟢 **LOW:** `HeaderLogic.test.ts` was fragile. Refactored to use mock data and test against confirmed `i18n-helpers` behavior.
- **Actions Taken:** 
    - Refactored `HeaderLogic.ts` to use `i18n-helpers` and removed custom `getLocalizedUrl`.
    - Added TypeScript interfaces to logic files.
    - Updated unit tests to be robust and pass verification.

## File List
- src/components/Header/HeaderLogic.ts
- src/components/Header/HeaderLogic.test.ts
- src/components/Header/DynamicHeader.astro
- src/components/Footer/FooterLogic.ts
- src/components/Footer/FooterLogic.test.ts
- src/components/Footer/Footer.astro
- src/components/ProjectSidebar.astro
- src/data/translations.json

## Change Log
- 2026-01-22: Implemented localization fixes and sidebar z-index adjustment.
- 2026-01-22: AI Review completed. Fixed localization logic inconsistencies and TypeScript errors. Status updated to done.

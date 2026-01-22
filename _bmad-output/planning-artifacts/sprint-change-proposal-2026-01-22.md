# Sprint Change Proposal: Localization & UI Fixes
**Date:** 2026-01-22
**Trigger:** Manual testing by user
**Status:** Approved for Implementation

## 1. Issue Summary
User identified 5 distinct bugs related to localization (wrong language in header/footer), broken links in footer, and UI z-index issues on project pages. These issues affect the core bilingual functionality and user experience.

## 2. Impact Analysis
- **Epic Impact:** Epic 5 (polishing) is affected. These are critical polish items.
- **Artifacts:** 
  - `Header` (Dynamic & Static)
  - `Footer`
  - `ProjectSidebar`
  - `Project Detail Page`
  - `Translations` dictionary
- **Scope:** Minor (localized code fixes, no architectural changes).

## 3. Recommended Approach
**Direct Adjustment:** Create a new story **5.5 - Localization & UI Bug Fixes** to track and implement these specific fixes. This keeps the work isolated and trackable.

## 4. Detailed Fix Proposals

### Bug 1: Header Navigation Labels
- **Issue:** Static English keys used.
- **Fix:** Update `DynamicHeader.astro` to use `t()` helper for keys (Home, About, etc.). Add keys to `translations.json` under `nav`.

### Bug 2: Request Partnership Button
- **Issue:** Hardcoded text.
- **Fix:** Replace with `t('nav.requestPartnership', lang)`.

### Bug 3: Footer Content
- **Issue:** Hardcoded English text for section headers and links.
- **Fix:** Map all footer text to `translations.json` and use `t()`.

### Bug 4: Footer Links
- **Issue:** `getLocalizedUrl` logic incorrect for BG (`prefix = ""` should be `prefix = "/bg"`).
- **Fix:** Standardize `getLocalizedUrl` to match Header logic.

### Bug 5: Sidebar Overlay
- **Issue:** Sticky sidebar overlaps CTA button due to stacking context.
- **Fix:** Add `z-index: 2` to `.cta-button` in `[...slug].astro` sidebar style.

## 5. Implementation Handoff
- **Role:** Development Team
- **Deliverable:** Story 5.5
- **Success Criteria:** All 5 bugs verified fixed in both EN and BG.

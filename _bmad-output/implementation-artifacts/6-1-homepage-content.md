# Story 6.1: Homepage Content Integration
Status: done

## Story
As a Marketing Manager,
I want the Homepage to reflect our specific corporate messaging ("Green Sunrise Ltd..."),
so that visitors see our actual value proposition instead of placeholders.

## Acceptance Criteria
1.  **Given** the Hero Section (Story 5.1)
    - **When** the page loads
    - **Then** the headline matches: *"Specialized Construction and Installation Services..."* (EN) / *"Специализирани услуги..."* (BG)
    - **And** the subhead matches the "Green Sunrise Ltd is an established company..." text provided.

2.  **Given** the "Why Choose Us" section
    - **When** the user scrolls past the hero
    - **Then** a new section displays the 5 key advantages (Expertise, Own Machinery, Precision, Workflow, Partnership)
    - **And** it uses an icon-grid or feature-list layout consistent with the design system.

3.  **Given** the Footer area
    - **When** the user reaches the bottom
    - **Then** a "Trusted Partner" / "Партньорство с доверие" text band is visible immediately before the footer.

## Tasks / Subtasks
- [x] **Update Localization Dictionary** (AC 1, 2, 3)
  - [x] Add `home` section to `translations.json` with keys for Headline, Subhead, Advantages (title + 5 items), and Trusted Partner banner.
- [x] **Implement Hero Content Updates** (AC 1)
  - [x] Update `index.astro` to use new `t('home.headline')` and `t('home.subhead')` keys.
- [x] **Implement Advantages Section** (AC 2)
  - [x] Create `Advantages.astro` component (or implement directly in `index.astro` if simple).
  - [x] Style using design system tokens.
  - [x] Ensure bilingual support.
- [x] **Implement Trusted Partner Banner** (AC 3)
  - [x] Add section before Footer in `index.astro` or `Layout.astro`.
  - [x] Style with appropriate background/typography.

## Technical Notes
- Update `translations.json` with new keys.
- Modify `index.astro`.
- Ensure all text is pulled from `translations.json` via `i18n-helpers`.

## Dev Agent Record


## File List
- src/data/translations.json
- src/components/HomeHero.astro
- src/components/HomeAdvantages.astro
- src/components/TrustedPartnerBanner.astro
- src/pages/[lang]/index.astro
- src/data/translations-structure.test.ts

## Change Log
- 2026-01-22: Implemented Story 6.1 - Updated Homepage content with new sections and bilingual translations.



## Senior Developer Review (AI)
- **Date:** 2026-01-22
- **Reviewer:** Antigravity (AI)
- **Outcome:** ✅ APPROVED

### Findings
- **High/Critical:** 0
- **Medium:** 0
- **Low:** 1

#### 🟢 Low
1. **Definition of Done Discrepancy**: `src/components/HomeHero.astro` is listed in the `File List` but implies no changes were made to the file itself (content updates were handled via `translations.json` and `index.astro` props). *Action: Accepted as documentation artifact.*

### Verification
- ✅ **AC1 (Hero)**: Content matches requirements via localization keys.
- ✅ **AC2 (Advantages)**: `HomeAdvantages.astro` implemented with correct icon grid and refactored layout.
- ✅ **AC3 (Trusted Partner)**: Component implemented and positioned correctly.
- ✅ **Tests**: `translations-structure.test.ts` passed.

**Status:** Story confirmed as **done**.

# Story 1.3: Bilingual Language Switcher

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As an international investor,
I want to toggle the site language between Bulgarian and English,
so that I can review technical documents in my preferred language without losing my current page context.

## Acceptance Criteria

1. **Given** a visitor is on a specific page (e.g., `/projects`)
2. **When** they click the 'EN' toggle in the header
3. **Then** the URL changes to `/en/projects`
4. **And** the content updates to the English version instantly
5. **And** the language preference is persisted across subsequent navigation
6. **And** the toggle UI aligns with the "Executive White" and "Institutional Green" design tokens
7. **And** the toggle identifies the current active language with a visual indicator (active state)

## Tasks / Subtasks

- [x] Implement Language Switcher UI Component (AC: 2, 6, 7)
  - [x] Create `LanguageSwitcher.astro` component
  - [x] Style with `--gs-institutional-green` (#064E3B) for active state
  - [x] Use `Geist Mono` for the language labels (BG/EN) to project technical precision
- [x] Implement Path-Preserving Redirect Logic (AC: 1, 3, 4)
  - [x] Create `i18n-helpers.ts` in `src/utils/`
  - [x] Implement a function to calculate the "translated URL" for the current path
  - [x] Handle the root path (`/`) to `/en` transition and vice-versa
- [x] Persist Language Preference (AC: 5)
  - [x] Implement client-side logic (using `astro:after-swap`) to update a `lang` cookie or localStorage
  - [x] Ensure the redirect logic in Story 1.1 respects this stored preference
- [x] Integration (AC: 2)
  - [x] Add `LanguageSwitcher` to the `Header.astro` component

## Dev Notes

### Architecture Patterns & Constraints
- **Routing:** Use Astro's native `[lang]` routing. Avoid custom middleware for basic sub-path redirects if possible.
- **Client-Side JS:** Minimize JS; only use it for the active state detection or setting the persistence token if needed.
- **Naming:** **kebab-case** for the utility `i18n-helpers.ts`. **PascalCase** for the component `LanguageSwitcher.astro`.
- **View Transitions:** Ensure the language switcher state is correctly re-initialized after a navigation event using `astro:after-swap`.

### Source Tree Components to Touch
- `src/components/LanguageSwitcher.astro` [NEW]
- `src/utils/i18n-helpers.ts` [NEW]
- `src/components/Header.astro` [MODIFY]

### Testing Standards Summary
- Verify that switching from `/bg/projects` leads to `/en/projects` and NOT the home page.
- Verify that the active language is visually distinct.

## References

- [Architecture - Localization Section](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L108)
- [Project Context - View Transitions Rule](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L36)
- [UX Specification - Micro-Emotions](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L82)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List
- Implemented `LanguageSwitcher.astro` with institutional green active state and Geist Mono font.
- Created `src/utils/i18n-helpers.ts` for centralized translation logic and persistence.
- Verified path translation logic with 7 passing unit tests (Vitest).
- Added client-side persistence (localStorage) with `astro:after-swap` support.
- Updated `src/pages/index.astro` to respect stored language preference on root access.
- Integrated component into `DynamicHeader.astro` replacing the hardcoded placeholder.

### File List
- src/components/LanguageSwitcher.astro
- src/utils/i18n-helpers.ts
- src/utils/i18n-helpers.test.ts
- src/pages/index.astro
- src/components/Header/DynamicHeader.astro
- _bmad-output/planning-artifacts/project-context.md

## Senior Developer Review (AI)

_Reviewer: Icytank on 2026-01-21_

### Outcome: Approved with Changes (Fixed)

**Summary:**
Code review identified a critical bug in the header's language logic and a discrepancy in the project documentation. Both have been automatically resolved.

### Findings & Fixes

1.  **[CRITICAL] Broken Navigation Prefixes** (`src/components/Header/DynamicHeader.astro`)
    *   **Issue:** The component was generating empty prefixes for Bulgarian links (e.g., `/projects` instead of `/bg/projects`), which would fail under the strict `/bg` routing strategy.
    *   **Fix:** Updated `getLocalizedUrl` to always apply the `/${lang}` prefix.

2.  **[MEDIUM] Documentation Mismatch** (`project-context.md`)
    *   **Issue:** The project context incorrectly stated the sub-path strategy was `/` and `/en/`.
    *   **Fix:** Updated documentation to reflect the actual `/bg/` and `/en/` strategy.


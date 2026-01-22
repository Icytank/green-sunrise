# Story 6.3: Services List & Machinery Integration
Status: done

## Story
As a Client,
I want to see the 5 specific core services listed clearly,
so that I understand the full scope of Green Sunrise's offering beyond just machinery rental.

## Acceptance Criteria
1.  **Given** the Services page
    - **When** the page loads
    - **Then** it displays the specific 5-item service list (Pile Driving, Structure Installation, Module Installation, Support for EPC, Labour Teams).

2.  **Given** Service Item #1 "Pile Driving"
    - **When** viewing this item
    - **Then** the Machinery Showcase (Story 2.2) is embedded or linked here to visually prove the "Own Machinery" claim.

3.  **Given** the "Why Work With Us" section
    - **When** scrolling to the bottom
    - **Then** the 5 bullet points (Specialized focus, Own machinery, etc.) are displayed.

## Technical Notes
- Refactor `services.astro`.
- Ensure Machinery Grid is visually integrated with the relevant service point.
## Dev Agent Record


## File List
- src/data/translations.json
- src/components/ServiceList.astro
- src/components/WhyWorkWithUs.astro
- src/pages/[lang]/services.astro
- src/data/translations-services.test.ts

## Change Log
- 2026-01-22: Implemented Story 6.3 - Restructured Services page, added Service List and Why Work With Us sections with full localization.

## Senior Developer Review (AI)
- **Date:** 2026-01-22
- **Reviewer:** Antigravity (AI)
- **Outcome:** ✅ APPROVED

### Findings
- **High/Critical:** 0
- **Medium:** 0
- **Low:** 0

### Verification
- ✅ **AC1 (Service List)**: `ServiceList.astro` displays 5 services with correct localization and centered flex layout.
- ✅ **AC2 (Machinery Integration)**: `services.astro` embeds `MachineryCard` grid directly below Service List, proving "Own Machinery" claim.
- ✅ **AC3 (Why Work With Us)**: `WhyWorkWithUs.astro` displays 5 bullet points with correct styling.
- ✅ **Tests**: `translations-services.test.ts` passed.

**Status:** Story confirmed as **done**.

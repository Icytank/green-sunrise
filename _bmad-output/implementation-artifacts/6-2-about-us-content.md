# Story 6.2: About Us Content & Structure
Status: done

## Story
As a Stakeholder,
I want the About Us page to detail our Mission, Vision, and Values,
so that potential partners understand our corporate philosophy alongside our team expertise.

## Acceptance Criteria
1.  **Given** the About page
    - **When** the page loads
    - **Then** an Intro section displays the specific "Green Sunrise Ltd is a specialized company..." text.

2.  **Given** the Mission & Vision logic
    - **When** viewing the corporate overview
    - **Then** a 2-column layout displays "Our Mission" and "Our Vision" with the provided copy.

3.  **Given** the "Our Values" list
    - **When** scrolling down
    - **Then** the 5 core values (Quality, Professional Team, Technical Capability, Integrity, Responsibility) are displayed clearly.

4.  **Given** the existing Team Profiles
    - **When** viewing the page
    - **Then** the Team section (Story 2.3) remains visible at the bottom of the page.

## Technical Notes
- Update `translations.json`.
- Modify `about.astro` to add the new sections above the `TeamMember` grid.
## Dev Agent Record


## File List
- src/data/translations.json
- src/components/AboutIntro.astro
- src/components/AboutMission.astro
- src/components/AboutValues.astro
- src/pages/[lang]/about.astro
- src/data/translations-about.test.ts

## Change Log
- 2026-01-22: Implemented Story 6.2 - Added Intro, Mission, and Values sections to About page with full localization.

## Senior Developer Review (AI)
- **Date:** 2026-01-22
- **Reviewer:** Antigravity (AI)
- **Outcome:** ✅ APPROVED (after fix)

### Findings
- **High/Critical:** 0
- **Medium:** 1 (Fixed)
- **Low:** 0

#### 🟡 Medium (Fixed)
1. **Orphaned `</section>` Tag**: `src/pages/[lang]/about.astro` line 62 had a dangling closing tag with no matching opener. *Fixed automatically.*

### Verification
- ✅ **AC1 (Intro)**: `AboutIntro.astro` displays correct localized text.
- ✅ **AC2 (Mission/Vision)**: `AboutMission.astro` implements 2-column layout.
- ✅ **AC3 (Values)**: `AboutValues.astro` displays 5 values with smart centered layout.
- ✅ **AC4 (Team)**: Team section remains at page bottom.
- ✅ **Tests**: `translations-about.test.ts` passed.

**Status:** Story confirmed as **done**.

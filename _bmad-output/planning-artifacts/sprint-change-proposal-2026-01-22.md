# Sprint Change Proposal: Content Integration & Refinement

**Date:** 2026-01-22
**Trigger:** User provided specific content/copy for all 5 core pages via spreadsheets.
**Scope:** Minor / Content-Heavy

## 1. Issue Summary
The initial implementation used placeholder content derived from the PRD. The client/user has now provided the exact text, lists, and structural preferences for the Homepage, About Us, Services, Projects, and Contact pages. These updates need to be integrated "smartly" to blend with the existing high-quality Astro architecture without overwriting the functional logic.

## 2. Impact Analysis
- **Epic Impact:**
    - **Epic 1 (Foundation):** Homepage intro text and Contact page layout update.
    - **Epic 2 (Machinery/Teams):** Services page structure change (List vs Gallery) and About Us intro addition.
    - **Epic 3 (Projects):** Project schema update (`scope` field) and Intro text.
    - **Epic 4 (B2B):** Contact page text and "Company Details" sidebar addition.
- **Technical Impact:**
    - **Schema:** `src/content/config.ts` needs a new `scope` field for Projects.
    - **Layouts:** `services.astro` and `contact.astro` need minor layout refactoring to accommodate new text blocks.
    - **Localization:** `translations.json` will be significantly expanded.

## 3. Recommended Approach: Direct Adjustment
We will treat this as a "Content Injection" pass. We will not revert any functional work (like the map logic or machinery gallery) but will wrap them in the new narrative structures provided by the text.

**Execution Strategy:**
1.  **Schema & Data First:** Update `content/config.ts` and `translations.json`.
2.  **Page-by-Page Integration:** Update the `.astro` files to render the new text blocks and lists.

## 4. Detailed Change Proposals

### 4.1 Homepage (Story 5.1 / 5.2)
- **Hero:** Update Headline/Subhead to match "Green Sunrise Ltd..." provided text.
- **Why Choose Us:** Insert new icon grid/list after Hero.
- **Mission:** Add "Trusted Partner" text band before footer.

### 4.2 About Us (Story 2.3)
- **Intro:** Add specific company overview text.
- **Mission/Vision:** Add 2-column text block.
- **Values:** Add 5-item values list.
- **Team:** Keep existing Team Profiles at the bottom.

### 4.3 Services (Story 2.2)
- **List Structure:** Refactor main content into a 5-item list (Pile Driving, Installation, etc.).
- **Machinery Integration:** Embed the existing Machinery Showcase inside "Item 1: Pile Driving".
- **Why Work With Us:** Add feature list at bottom.

### 4.4 Projects (Story 3.1)
- **Intro:** Add specific gallery intro text.
- **Schema:** Add `scope` (string) field to Project collection.
- **Our Approach:** Add methodology list at bottom.

### 4.5 Contact (Story 4.1)
- **Intro:** Add welcoming text.
- **Layout:** Switch to 2-column layout (Left: Stats/Hours, Right: Form).
- **Details:** Add Company Address/Phone block and Business Hours block.

## 5. Implementation Handoff
- **Role:** Development Team (Dev Agent).
- **Complexity:** Low (mostly copy/paste and minor JSX layout).
- **Deliverables:** Updated `translations.json`, `content.config.ts`, and 5 `.astro` pages.

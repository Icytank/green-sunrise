# Story 1.2: Institutional Header & Footer

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want to see a persistent corporate header and footer,
so that I can easily navigate the 5 core pages and find legal/contact information.

## Acceptance Criteria

1. **Given** a visitor is on any page
2. **When** the page loads
3. **Then** a horizontal header is visible containing the Green Sunrise logo (`green sunrise stamp 1205x165.png`)
4. **And** the header contains 5 navigation links: Home, About, Services, Projects, Contact
5. **And** the footer is visible containing the GS Stamp badge, VAT number, physical address, and contact email
6. **And** the header and footer use the `--gs-institutional-green` and `--gs-executive-white` tokens
7. **And** the layout is fully responsive (mobile-first grid)

## Tasks / Subtasks

- [x] Create Core Navigation Components (AC: 3, 4)
  - [x] Implement `Header.astro` with horizontal layout
  - [x] Integrate logo from `/mnt/fastdrive/green-sunrise/logos/green sunrise stamp 1205x165.png`
  - [x] Add navigation links matching the 5-page structure from [Architecture](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L223)
- [x] Implement Institutional Footer (AC: 5)
  - [x] Create `Footer.astro` component
  - [x] Implement `GSStamp.astro` component for the trust badge
  - [x] Include VAT, physical address, and contact email in footer typography
- [x] Styling & Branding (AC: 6, 7)
  - [x] Apply `--gs-institutional-green` (#064E3B) and `--gs-executive-white` (#F8FAFC)
  - [x] Ensure header uses `Inter` bold typography for nav links
  - [x] Implement mobile toggle/hamburger for the header on smaller viewports
- [x] Integration (AC: 1, 2)
  - [x] Add `Header` and `Footer` to `BaseLayout.astro`

## Dev Notes

### Architecture Patterns & Constraints
- **Branding:** Use the "Stamp" variant logo as the primary visual mark in the header.
- **Component Naming:** Use **PascalCase** (`Header.astro`, `Footer.astro`, `GSStamp.astro`).
- **Styling:** Vanilla CSS only. No Tailwind. Use the `--gs-` prefix for all custom properties.
- **Accessibility:** Ensure high contrast for navigation links (AA standard).

### Source Tree Components to Touch
- `src/components/Header.astro` [NEW]
- `src/components/Footer.astro` [NEW]
- `src/components/GSStamp.astro` [NEW]
- `src/layouts/BaseLayout.astro` [MODIFY]

### Testing Standards Summary
- Verify link targets match the i18n route structure established in Story 1.1 (e.g., uses `[lang]` utility for links).

## References

- [Architecture - Project Structure](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L216-L255)
- [UX Specification - Visual Design](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L175-L200)
- [PRD - Functional Requirements](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L173-L175)

## Dev Agent Record

### Agent Model Used

Antigravity (Senior Developer Persona: Amelia)

### Debug Log References

### Completion Notes List
- Updated `src/styles/tokens.css` with UX-approved brand colors and typography.
- Updated `src/data/navData.json` to reflect the 5-pillar site structure (Home, About, Services, Projects, Contact).
- Updated `src/data/client.ts` with authentic Green Sunrise business metadata (VAT, Address, Contact).
- Created `src/components/GSStamp.astro` to serve as the project's primary trust verification mark.
- Refactored `src/components/Header/DynamicHeader.astro` to use the stamp logo, update branding labels ("Request Partnership"), and ensure horizontal navigation compliance.
- Refactored `src/components/Footer/Footer.astro` to incorporate the GS Stamp, VAT number, and professionally formatted business details.
- Verified that `BaseLayout.astro` correctly integrates the updated components.

### Review Fixes Applied (Adversarial Audit)
- **Localization:** Implemented `lang` prop support in `DynamicHeader` and `Footer` to correctly prefix all internal links (e.g., `/en/projects/`).
- **Language Switcher:** Added a functional BG|EN language switcher to the Header.
- **Rule Compliance:** Fixed `GSStamp.astro` to use `astro:assets` and corrected the logo path by moving assets to `src/assets/images/`.
- **Branding Enforcement:** Replaced hardcoded "Stitch" styling with mandatory `--gs-` tokens for colors and typography throughout Header and Footer.
- **Dark Mode:** Enforced consistent dark mode colors using CSS tokens in all navigation components.

### File List
- `src/styles/tokens.css` (Modified)
- `src/data/navData.json` (Modified)
- `src/data/client.ts` (Modified)
- `src/components/GSStamp.astro` (Modified)
- `src/components/Header/DynamicHeader.astro` (Modified)
- `src/components/Footer/Footer.astro` (Modified)
- `src/layouts/BaseLayout.astro` (Modified)
- `src/assets/images/gs-stamp.png` (New)
- `_bmad-output/implementation-artifacts/1-2-header-footer.md` (Modified)

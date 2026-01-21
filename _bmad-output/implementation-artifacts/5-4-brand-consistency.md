# Story 5.4: Brand Consistency Audit & Polishing

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a business owner (Icytank),
I want a final quality audit of the entire site shell,
so that the Green Sunrise brand is consistent across all pages before launch.

## Acceptance Criteria

1. **Given** a near-complete site shell
2. **When** performing the final brand audit
3. **Then** the `--gs-institutional-green` (#064E3B) is the dominant accent color across all interactive elements
4. **And** the "GS Stamp" is utilized as the singular mark of verification across Projects, Machinery, and Teams
5. **And** the language switcher preserves the "Premium" feel with zero layout shifts
6. **And** all CTAs follow the "Technical Authority" hover state defined in Story 5.1
7. **And** broken links or inconsistent padding are eliminated site-wide
8. **And** the site favicon and metadata follow the professional brand guidelines

## Tasks / Subtasks

- [ ] Global Brand Audit (AC: 3, 4, 6)
  - [ ] Sweep all components for color consistency. Eliminate any non-token colors.
  - [ ] Standardize the usage of the "GS Stamp" (ensure consistent scaling and positioning)
- [ ] Finishing Touches (AC: 5, 8)
  - [ ] Integrate site Favicon and SEO OpenGraph tags using brand colors
  - [ ] Fine-tune transitions between pages (Astro View Transitions) to ensure they feel "Safe" and "Smooth"
- [ ] Responsive Polish (AC: 7)
  - [ ] Verify that every page maintains corporate symmetry on ultra-wide monitors and small mobile screens

## Dev Notes

### Architecture Patterns & Constraints
- **Zero-Friction UX:** Any friction or "glitch" in the UI reduces technical trust. [Source: ux-design-specification.md#L67]
- **Naming:** Follow established PascalCase and kebab-case patterns for any last-minute assets.
- **Consistency:** If a design decision was made in Epic 1, it MUST be reflected in Epic 5.

### Source Tree Components to Touch
- `src/layouts/BaseLayout.astro` [MODIFY]
- Global CSS and Tokens.

### Testing Standards Summary
- Cross-browser audit (Mobile Safari, Chrome, Firefox) to verify visual consistency.
- Broken link check (using `link-checker` or automated crawl).

## References

- [UX Specification - Mood & Narrative](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L50)
- [PRD - Success Criteria (Professional Portfolio)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L21)
- [Architecture - Cross-Cutting Concerns](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L48)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

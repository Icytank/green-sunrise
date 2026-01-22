# Story 5.1: "Calculated Confidence" Hero Section

Status: review

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want to see a high-impact hero section that projects technical authority and corporate stability,
so that I immediately understand Green Sunrise is a professional partner for utility-scale PV.

## Acceptance Criteria

1. **Given** the home page (`index.astro`)
2. **When** the page loads
3. **Then** a hero section is displayed with a large high-resolution background of a PV site and pile-drivers
4. **And** the headline uses "Impact Typography" (Inter Bold, large scale) to project authority
5. **And** the subheading clearly states the value proposition: "Foundations for Utility-Scale Solar. Owned Machinery. Certified Teams."
6. **And** a primary "View Projects" CTA and a secondary "Request Specs" CTA are visible
7. **And** the hero section reaches the <1s FCP target by optimizing the background image
8. **And** the layout is asymmetrical but balanced, fitting the "Safe/Corporate" aesthetic

## Tasks / Subtasks

- [ ] Implement Hero Component (AC: 1, 3, 4, 5, 8)
  - [ ] Create `HomeHero.astro` PascalCase component
  - [ ] Implement responsive layout with 12-column grid integration
  - [ ] Style headline with `--gs-institutional-green` (#064E3B) or high-contrast white overlay
- [ ] Image Optimization (AC: 3, 7)
  - [ ] Use Astro `<Image />` for the background
  - [ ] Implement `loading="eager"` and `fetchpriority="high"` for the LCP hero image
- [ ] CTA Implementation (AC: 6)
  - [ ] Create `Button.astro` component with primary and secondary variants
  - [ ] Link CTAs to specialized routes (Portfolio and Contact)

## Dev Notes

### Architecture Patterns & Constraints
- **LCP Performance:** The hero image is the most critical asset for performance. Ensure it is correctly sized and prioritized.
- **Micro-Emotions:** The transition into the hero should feel "Calculated" and "Confident." Avoid bouncy animations; use smooth, professional fades.
- **Naming:** **PascalCase** for `HomeHero.astro`.

### Source Tree Components to Touch
- `src/components/HomeHero.astro` [NEW]
- `src/pages/[lang]/index.astro` [MODIFY]
- `src/components/Button.astro` [NEW]

### Testing Standards Summary
- Verify that the hero image loads before the 1s mark on 4G.
- Check CTA link accessibility and tap target sizes.

## References

- [UX Specification - Calculated Confidence Hero](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md#L93-L100)
- [PRD - Success Criteria (First Impression)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L20)
- [Architecture - Implementation Patterns (MPA)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L104)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

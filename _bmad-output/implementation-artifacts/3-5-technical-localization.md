# Story 3.5: Technical Terminology Localization (BG/EN)

Status: ready-for-dev

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a user,
I want technical terms like "MWp" or "Pile-Driving" to be correctly translated,
so that the professional authority of the site is maintained in both languages.

## Acceptance Criteria

1. **Given** a bilingual project entry or technical spec
2. **When** switching between Bulgarian and English
3. **Then** all technical labels (Capacity, Terrain, Status) use the correct industry terminology
4. **And** the meaning and precision of the data is preserved across translations
5. **And** the dictionary of technical terms is managed in a central, type-safe location
6. **And** [Project Context](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md) i18n rules are strictly followed

## Tasks / Subtasks

- [ ] Create Central Technical Dictionary (AC: 3, 5)
  - [ ] Implement `i18n.ts` in `src/utils/` to store translation mappings for Technical terms
  - [ ] Define mappings for:
    - MWp / MW (МВт / МВтп)
    - Terrain: Mountainous (Планински)
    - Terrain: Flat (Равнинен)
    - Terrain: Industrial (Промишлен)
    - Terrain: Roof-top (Покривен)
    - verified (Проверен)
- [ ] Implement Technical Label Helper (AC: 1, 3, 4)
  - [ ] Create a `translateLabel(key, lang)` utility
  - [ ] Integrate this helper into `ProjectCard.astro`, `ProjectSidebar.astro`, and `MachineryCard.astro`
- [ ] Language Parity Audit (AC: 2, 6)
  - [ ] Cross-check all project entries for 100% technical parity
  - [ ] Ensure that decimals in capacity (e.g., 10.5) use the correct regional separator if required (though standardizing on `.` is preferred for Technical context)

## Dev Notes

### Architecture Patterns & Constraints
- **Type Safety:** Ensure the technical dictionary is typed to prevent missing translation keys at build time.
- **Naming:** **kebab-case** for `i18n.ts` or `dictionary.ts`.
- **Astro i18n:** Leverage Astro's native i18n features where possible, but use the specialized helper for the technical spec labels.
- **Clarity:** Precision is more important than "natural" language. Use industry-standard terms over generic ones.

### Source Tree Components to Touch
- `src/utils/i18n.ts` [NEW]
- `src/components/ProjectCard.astro` [MODIFY]
- `src/components/ProjectSidebar.astro` [MODIFY]
- `src/components/MachineryCard.astro` [MODIFY]

### Testing Standards Summary
- Verify that switching to Bulgarian reflects "МВт" for Capacity.
- Verify that no translation keys are missing for the defined `TerrainType` enum.

## References

- [Architecture - Localization Section](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L108)
- [PRD - Functional Requirements (FR11)](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L170-L171)
- [Project Context - Bilingual Sync](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L51-L54)

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List

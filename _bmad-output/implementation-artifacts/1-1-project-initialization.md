# Story 1.1: Project Initialization & i18n Routing

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a developer,
I want to initialize the project using the CodeStitch Astro template and configure bilingual routing,
so that the site can be accessed at both Bulgarian and English sub-paths.

## Acceptance Criteria

1. **Given** the CodeStitch template is selected
2. **When** the initialization command `npx create-astro@latest --template CodeStitchOfficial/Intermediate-Astro-Decap-CMS` is run
3. **Then** the project structure is created following the Architecture specification
4. **And** the `astro.config.mjs` is updated to support `bg` and `en` locales
5. **And** navigating to `/` redirects to the default locale (`bg`)
6. **And** navigating to `/en` shows the English root.
7. **And** [Project Context](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md) rules are integrated into the initial configuration.

## Tasks / Subtasks

- [x] Project Initialization (AC: 1, 2, 3)
  - [x] Run initialization command: `npx create-astro@latest --template CodeStitchOfficial/Intermediate-Astro-Decap-CMS`
  - [x] Verify directory structure matches [Architecture](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md#L218-L255)
- [x] Configure i18n Sub-path Strategy (AC: 4, 5, 6)
  - [x] Update `astro.config.mjs` with native i18n support
  - [x] Set `defaultLocale: 'bg'` and `locales: ['bg', 'en']`
  - [x] Configure `routing: { prefixDefaultLocale: true }` [Source: architecture.md#L108]
- [x] Setup Directory Boundaries (AC: 3, 7)
  - [x] Create `src/pages/[lang]/` directory
  - [x] Move initial pages into localized routes
  - [x] Create `src/content/projects/bg` and `src/content/projects/en` placeholders
- [x] Quality Baseline (AC: 7)
  - [x] Initialize `src/styles/tokens.css` with `--gs-` prefixed variables
  - [x] Verify `tsconfig.json` enforces strict TypeScript rules from [Project Context](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md#L31)

## Dev Notes

### Architecture Patterns & Constraints
- **MPA Strategy:** Strictly use Astro's native MPA routing. No SPA libraries.
- **Naming:** **PascalCase** for all Astro components; **kebab-case** for utilities/assets.
- **Styling:** Use Vanilla CSS with design tokens. Every variable must use the `--gs-` prefix.
- **View Transitions:** Use `astro:after-swap` for client-side re-initialization.

### Source Tree Components to Touch
- `astro.config.mjs`: Central i18n configuration.
- `src/pages/`: Routing structure reorganization.
- `src/styles/tokens.css`: Initial design system setup.

### Testing Standards Summary
- **Co-located Tests:** `[Filename].test.ts` must live next to the source file.
- **Strict Logic:** Extra logic must be in `.ts` files, not in Carbon components.

## References

- [Architecture Document](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/architecture.md)
- [PRD - Success Criteria](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/prd.md#L18-L37)
- [Project Context Bible](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/project-context.md)
- [UX Design Specification](file:///mnt/fastdrive/green-sunrise/_bmad-output/planning-artifacts/ux-design-specification.md)

## Dev Agent Record

### Agent Model Used
- Antigravity (Senior Developer Persona: Amelia)

### Debug Log References

### Completion Notes List

### File List
- `astro.config.mjs`
- `tsconfig.json`
- `src/layouts/BaseLayout.astro`
- `src/styles/tokens.css`
- `src/styles/root.less`
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/about.astro`
- `src/pages/[lang]/contact.astro`
- `src/pages/[lang]/reviews.astro`
- `src/pages/[lang]/projects.astro`
- `src/pages/[lang]/blog/index.astro`
- `src/pages/[lang]/blog/[post].astro`
- `src/pages/[lang]/projects/project-1.astro`
- `src/pages/[lang]/projects/project-2.astro`
- `src/utils/` (renamed from `src/js/`)
- `src/content/projects/` (placeholders)

# Functional Spec: Project Setup

## User Story

As a **developer**, I want an **initialized Astro project with Tailwind CSS and TypeScript**, so that I can **start building the landing page with a modern, performant stack**.

---

## Acceptance Criteria

### AC-1: Project Initialization
**GIVEN** an empty project directory
**WHEN** I run the setup commands
**THEN** an Astro project is created with TypeScript support

### AC-2: Tailwind Integration
**GIVEN** the Astro project is initialized
**WHEN** I add Tailwind utility classes to components
**THEN** styles are applied correctly and build includes only used classes

### AC-3: Development Server
**GIVEN** the project is set up
**WHEN** I run `npm run dev`
**THEN** the development server starts on localhost with hot reload

### AC-4: Production Build
**GIVEN** the project has valid code
**WHEN** I run `npm run build`
**THEN** static HTML/CSS/JS is generated in `dist/` directory

### AC-5: Code Quality Tools
**GIVEN** ESLint and Prettier are configured
**WHEN** I write code
**THEN** linting and formatting work correctly

### AC-6: Project Structure
**GIVEN** the project is initialized
**WHEN** I inspect the directory structure
**THEN** it follows Astro conventions:
- `src/components/` - UI components
- `src/layouts/` - Page layouts
- `src/pages/` - Pages (routes)
- `src/styles/` - Global styles
- `public/` - Static assets

---

## Inputs

- **Commands:** `npm create astro@latest`, `npx astro add tailwind`
- **Config files:** `astro.config.mjs`, `tsconfig.json`, `tailwind.config.mjs`

---

## Expected Output

A fully functional Astro project that:
- Runs locally with hot reload
- Builds successfully to static HTML
- Has Tailwind CSS integrated
- Uses TypeScript
- Follows project structure conventions
- Has linting/formatting configured

---

## Edge Cases

- **Node version:** Ensure Node >= 18 (check with `node -v`)
- **Port conflicts:** Dev server defaults to `localhost:4321`, handle if port is busy
- **Empty cache:** First build may take longer

---

## Success Metrics

- ✅ `npm run dev` starts server without errors
- ✅ `npm run build` completes successfully
- ✅ TypeScript compilation has zero errors
- ✅ Tailwind utility classes work in components
- ✅ Project structure matches conventions

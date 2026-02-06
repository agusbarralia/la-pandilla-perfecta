# Technical Design: Project Setup

## Approach

Use official Astro CLI to scaffold project with TypeScript, then add Tailwind via Astro's integration system. Configure ESLint and Prettier for code quality. Organize project structure following Astro conventions.

---

## Components

### 1. Astro Project Scaffold
**Location:** Project root
**Tool:** `npm create astro@latest`
**Config:** `astro.config.mjs`, `tsconfig.json`

### 2. Tailwind CSS Integration
**Location:** `astro.config.mjs` (integration), `tailwind.config.mjs` (config)
**Tool:** `npx astro add tailwind`
**Output:** Tailwind installed and configured automatically

### 3. Directory Structure
**Location:** `src/`
```
src/
├── components/   # Reusable UI components
├── layouts/      # Page layouts (BaseLayout.astro)
├── pages/        # Routes (index.astro = /)
├── styles/       # Global CSS
└── lib/          # Utilities, helpers, config
```

### 4. Code Quality Tools
**Location:** `.eslintrc.cjs`, `.prettierrc`
**Tools:** ESLint (Astro plugin), Prettier (Astro plugin)

### 5. Static Assets
**Location:** `public/`
**Contents:** Images, fonts, favicon (copied as-is to build output)

---

## Data Flow

```
CLI commands → Scaffold project → Install dependencies → Add Tailwind →
Configure linting → Create directory structure → Verify build
```

---

## Key Decisions

### Decision 1: Astro CLI vs Manual Setup
- **Chosen:** Astro CLI (`npm create astro@latest`)
- **Rationale:** Official tool, handles all boilerplate, zero config needed, ensures best practices

### Decision 2: Tailwind Integration Method
- **Chosen:** `npx astro add tailwind` (official integration)
- **Rationale:** Automatic setup, zero manual config, optimized for Astro, JIT mode enabled

### Decision 3: TypeScript Strictness
- **Chosen:** `strict: true` in `tsconfig.json`
- **Rationale:** Catch type errors early, better DX, prevents bugs

### Decision 4: ESLint + Prettier
- **Chosen:** Use Astro's recommended configs
- **Rationale:** Optimized for Astro components, avoids conflicts, community-tested

### Decision 5: Directory Structure
- **Chosen:** Follow Astro conventions exactly
- **Rationale:** Official patterns, easier for other devs to understand, integrates with Astro's file-based routing

---

## Constraints Respected

- ✅ **No backend:** Landing is fully static (Astro SSG mode)
- ✅ **Performance:** Astro generates zero JS by default, Tailwind purges unused CSS
- ✅ **SEO:** SSG ensures all content is in HTML for crawlers
- ✅ **Maintenance:** Simple stack, official tools, minimal config

---

## File Structure After Setup

```
pandilla-web/
├── .gitignore
├── astro.config.mjs          # Astro + Tailwind config
├── package.json
├── tsconfig.json             # TypeScript config
├── tailwind.config.mjs       # Tailwind config
├── .eslintrc.cjs             # ESLint config
├── .prettierrc               # Prettier config
├── README.md                 # Updated with setup instructions
│
├── public/                   # Static assets
│   └── favicon.svg
│
├── src/
│   ├── components/           # UI components
│   ├── layouts/              # Page layouts
│   │   └── BaseLayout.astro  # Base HTML structure
│   ├── pages/                # Routes
│   │   └── index.astro       # Home page (/)
│   ├── styles/               # Global styles
│   │   └── global.css
│   └── lib/                  # Utilities
│       └── config.ts         # Site config (name, description, etc.)
│
├── dist/                     # Build output (gitignored)
└── node_modules/             # Dependencies (gitignored)
```

---

## Testing Strategy

### Build Validation
- **What:** Run `npm run build` after each setup step
- **Why:** Ensure no breaking changes, catch config errors early

### Development Server
- **What:** Run `npm run dev` and verify hot reload works
- **Why:** Confirm dev experience is smooth

### Tailwind Verification
- **What:** Create test component with Tailwind classes, verify styles apply
- **Why:** Confirm integration works end-to-end

### TypeScript Check
- **What:** Run `npm run build` (includes type-checking)
- **Why:** Ensure no type errors

---

## Implementation Steps

1. Check Node version (`node -v` >= 18)
2. Run `npm create astro@latest` (choose TypeScript strict)
3. Install dependencies (`npm install`)
4. Add Tailwind (`npx astro add tailwind`)
5. Configure ESLint + Prettier
6. Create directory structure (`src/components/`, `src/layouts/`, etc.)
7. Create base layout and index page
8. Add global styles
9. Create site config file
10. Update README.md
11. Verify dev server and build
12. Commit changes

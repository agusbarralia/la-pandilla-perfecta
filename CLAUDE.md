# La Pandilla Perfecta - Development Guide

Landing page para pet shop "La Pandilla Perfecta". Sitio informativo con ubicación, servicios, marcas, contacto. Futura expansión: reserva de turnos para lavado/peluquería canina.

---

## Tech Stack

- **Framework:** Astro (Static Site Generation)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Netlify / Vercel
- **Package Manager:** npm

### Rationale

**Why Astro?**
- Perfect for static content (landing page use case)
- Exceptional performance (zero JS by default, static HTML output)
- Excellent SEO (SSG out of the box)
- Tailwind integration in 2 minutes
- Easy maintenance & free hosting
- Future-proof: when adding booking system, link to separate Next.js app

**Future Architecture:**
- **Repo 1 (this):** Static landing (Astro + Tailwind)
- **Repo 2 (future):** Booking app (Next.js + backend + DB)
- **Integration:** CTA button on landing → redirects to booking subdomain/domain

---

## Development Approach: Spec-Driven + Feature-Organized

**Principles:**
1. **Specs define WHAT** (you decide HOW)
2. **Features are self-contained** (organized in structured directories)
3. **Work incrementally** (backlog → wip → completed)

---

## Meta: Self-Improvement Instructions

**IMPORTANT:** This file and `.claude/rules.md` are YOUR memory system. Update them proactively.

**During conversations, you MUST update these files if you discover:**

1. **Critical patterns or anti-patterns** - Common mistakes, gotchas, or best practices
2. **Architectural decisions** - Important choices that affect future development (stack, libs, design system)
3. **Constraint violations found** - If you catch yourself or user violating project rules
4. **Workflow improvements** - Better ways to organize or execute tasks
5. **Missing specifications** - Gaps in existing specs that caused confusion
6. **Design/UX decisions** - Branding, color palette, layout choices
7. **Integration quirks** - Issues with APIs, maps, booking systems, etc.

**Where to update:**
- **CLAUDE.md** - General workflow, quick reference (keep concise, <300 lines)
- **.claude/rules.md** - Project-specific rules, constraints, decisions (more detailed)
- **MEMORY.md** (auto memory) - Session learnings, mistakes to avoid

**How to update:**
- Use Edit tool immediately when you discover something important
- Don't wait for end of conversation
- Be concise but specific
- Include examples when helpful

**Example triggers:**
- "Stack chosen: Astro + Tailwind" → Update Tech Stack section and .claude/rules.md
- "Brand colors defined" → Add to .claude/rules.md
- "Google Maps API has rate limits" → Add to .claude/rules.md

---

## Development Cycle

### 1. Pick Feature from Backlog
```
Read specs/backlog.md → Choose P0 feature → Mark as "In Progress"
```

### 2. Create Feature Branch
```bash
# Ensure develop branch exists (create from main if needed)
git checkout main && git checkout -b develop  # Only first time

# Always branch from develop
git checkout develop
git pull origin develop  # Ensure up to date

# Create feature branch
feature="hero-section"
git checkout -b feature/$feature
```

### 3. Create WIP Structure
```bash
mkdir -p specs/wip/$feature
cp -r specs/template/* specs/wip/$feature/
```

### 4. Write Specs (in order)
```
1. specs/wip/$feature/meta.md           # Status, priority, dependencies
2. specs/wip/$feature/1-functional/     # WHAT it does (user-facing)
3. specs/wip/$feature/2-technical/      # HOW to design it (architecture)
4. specs/wip/$feature/3-tasks/          # Task breakdown (tasks.json - NOT .md)
```

### 5. Implement
```
5. Write code in src/; use 4-implementation/progress.md to log progress
6. Update tasks.json (change status: pending → done)
7. Update progress.md with decisions/issues
```

### 6. Complete
```
8. Code is already in src/; move specs/wip/$feature/ to specs/features/$feature/
9. Update meta.md (Status: Completed) and backlog.md (mark as [x])
10. Merge feature branch back to develop:
    git checkout develop && git merge feature/$feature
11. (Optional) Delete feature branch: git branch -d feature/$feature
```

**Details:** See `specs/DEVELOPMENT_WORKFLOW.md`

### Git Rules
- ALWAYS create feature branches from `develop` (not `main`)
- Feature branch naming: `feature/kebab-case-name`
- NEVER commit directly to `main`
- NEVER commit directly to `develop` (use feature branches)

---

## Project Structure

```
pandilla-web/
├── CLAUDE.md                        # This file
├── .claude/
│   └── rules.md                     # Project rules & decisions
├── specs/
│   ├── DEVELOPMENT_WORKFLOW.md      # HOW to organize work
│   ├── backlog.md                   # TODO list
│   ├── wip/                         # Work in progress
│   │   └── feature-name/
│   │       ├── 1-functional/
│   │       ├── 2-technical/
│   │       ├── 3-tasks/
│   │       ├── 4-implementation/
│   │       └── meta.md
│   ├── features/                    # Completed features
│   │   └── feature-name/
│   └── template/                    # Feature template
│
├── src/                             # Source code
│   ├── components/                  # UI components
│   ├── layouts/                     # Page layouts
│   ├── pages/                       # Pages
│   ├── styles/                      # Global styles
│   ├── assets/                      # Images, fonts, icons
│   └── lib/                         # Utilities, helpers
│
├── public/                          # Static assets
└── tests/                           # Tests
```

## Start Here

```bash
# 1. Read the workflow
cat specs/DEVELOPMENT_WORKFLOW.md

# 2. Check what's pending
cat specs/backlog.md

# 3. Start first feature
# (Follow workflow in DEVELOPMENT_WORKFLOW.md)
```

---

**Remember:**
- Specs define the contract
- Implementation is your creative freedom
- Organize work in feature directories
- Complete features before starting new ones

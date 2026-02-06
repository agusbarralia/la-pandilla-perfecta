# SDD Framework - Spec-Driven Development

Generic framework for organizing software development with specs-first approach.

---

## Core Principle

**Specs define WHAT. You decide HOW.**

```
Backlog → WIP (4 phases) → Implementation → Completed
```

---

## Directory Structure

```
pandilla-web/
├── specs/
│   ├── backlog.md              # Centralized TODO
│   │
│   ├── wip/                    # Work in progress
│   │   └── feature-name/
│   │       ├── 1-functional/   # WHAT it does
│   │       ├── 2-technical/    # HOW to design
│   │       ├── 3-tasks/        # Task breakdown (tasks.json)
│   │       ├── 4-implementation/ # progress.md
│   │       └── meta.md         # Metadata
│   │
│   ├── features/               # Completed
│   └── template/               # Feature template
│
├── src/                        # Source code
│   ├── components/             # UI components
│   ├── layouts/                # Page layouts
│   ├── pages/                  # Pages
│   ├── styles/                 # Global styles
│   ├── assets/                 # Images, fonts, icons
│   └── lib/                    # Utilities, helpers
│
├── public/                     # Static assets
└── tests/                      # Tests
```

---

## Development Cycle

### Phase 0: Backlog

**File:** `specs/backlog.md`

```markdown
## Features Pendientes
### P0 (Critical)
- [ ] Feature A

### P1 (Important)
- [ ] Feature B

## Bugs
## Tech Debt
## Ideas
```

---

### Phase 1: Start Feature

**Option A — Copy template (recommended):**
```bash
feature="my-feature"
mkdir -p specs/wip/$feature
cp -r specs/template/* specs/wip/$feature/
# Edit meta.md, 1-functional/spec.md, 2-technical/design.md, 3-tasks/tasks.json
```

**Option B — Create manually:**
```bash
feature="feature-name"
mkdir -p specs/wip/$feature/{1-functional,2-technical,3-tasks,4-implementation}
touch specs/wip/$feature/meta.md
```

**meta.md template:**
```markdown
# Feature: {name}
Status: In Progress
Priority: P0 | P1 | P2
Started: YYYY-MM-DD
Dependencies: {list}
Blockers: {list}
```

---

### Phase 2: Functional Spec (WHAT)

**File:** `specs/wip/{feature}/1-functional/spec.md`

```markdown
# Functional Spec: {Feature}

## User Story
As [user], I want [goal] so that [reason].

## Acceptance Criteria
GIVEN [context]
WHEN [action]
THEN [result]

## Inputs
- input1: type, description

## Expected Output
[Describe or show example]

## Edge Cases
- Case 1: behavior

## Success Metrics
- Metric 1
```

---

### Phase 3: Technical Design (HOW)

**File:** `specs/wip/{feature}/2-technical/design.md`

```markdown
# Technical Design: {Feature}

## Approach
[High-level strategy]

## Components
1. Component A (location)

## Data Flow
Input → Component A → Output

## Key Decisions
**Decision 1:** [Topic]
- Chosen: [Option]
- Rationale: [Why]

## Constraints Respected
- Constraint X

## Testing Strategy
- Unit: [What]
- Visual: [What] (responsive, cross-browser)
```

---

### Phase 4: Task Breakdown

**File:** `specs/wip/{feature}/3-tasks/tasks.json`

```json
{
  "feature": "feature-name",
  "stats": {
    "total": 10,
    "done": 0
  },
  "tasks": [
    {
      "id": "TASK-001",
      "title": "Short descriptive title",
      "description": "2-3 sentences max.",
      "status": "pending|in_progress|done|blocked",
      "layer": 1,
      "depends_on": [],
      "files": ["path/to/file.ext"],
      "acceptance_criteria": [
        "AC-1: Verifiable condition",
        "GATE: Tests pass"
      ],
      "references": ["US-1"]
    }
  ]
}
```

**Task Layers:**
- 1: Foundation (no dependencies)
- 2+: Higher layers depend on lower

**Status:**
- `pending`, `in_progress`, `done`, `blocked`

**Acceptance Criteria:**
- `AC-N`: Functional requirement
- `GATE`: Technical gate (build, tests, lighthouse)

---

### Phase 5: Implementation

**Location:** `specs/wip/{feature}/4-implementation/` — progress tracking only. Code is written **where it belongs** in the project (e.g. `src/`), creating or modifying the files indicated in each task in `tasks.json`.

**Contents of 4-implementation/:**

```
4-implementation/
└── progress.md    # Progress and decisions log (no code)
```

**progress.md:**
```markdown
## YYYY-MM-DD HH:MM
- TASK-001: [Status] — files touched: path/to/file.ext
- Decision: [What was decided]
- Issue: [Problem encountered]
- Solution: [How it was resolved]
```

**Where code goes:**
- Create or modify files in their actual location (e.g. `src/components/`, `src/pages/`, `src/styles/`).
- Use the `files` field of each task in `tasks.json` as a guide for which files to touch.
- Do not duplicate code in `4-implementation/`; all code lives in the project structure.

**Update tasks.json:**
```json
{
  "stats": {"total": 10, "done": 3},
  "tasks": [
    {"id": "TASK-001", "status": "done"}
  ]
}
```

---

### Phase 6: Complete

**Actions:**

```bash
# 1. Archive feature (specs + progress; code is already in src/)
mv specs/wip/$feature specs/features/$feature

# 2. Update meta.md
# Status: Completed
# Completed: YYYY-MM-DD

# 3. Update backlog
# - [x] Feature
```

---

## Rules

### MUST
1. One feature = One directory
2. Follow 4-phase structure
3. Use `tasks.json` (NOT .md)
4. Write specs before code
5. Complete features before starting new

### MUST NOT
1. Mix features in one directory
2. Skip phases
3. Use tasks.md
4. Leave features in WIP indefinitely

---

## Quick Reference

### Start
```bash
feature="name"
mkdir -p specs/wip/$feature && cp -r specs/template/* specs/wip/$feature/
```

### Check Status
```bash
ls specs/wip/          # In progress
ls specs/features/     # Completed
cat specs/backlog.md   # Pending
```

### Complete
```bash
# Code is already in src/; only archive specs
mv specs/wip/$feature specs/features/
# Update meta.md (Status: Completed) and backlog.md
```

---

## Validation

Feature is complete when:
- [ ] All tasks status = "done"
- [ ] Code created/updated in place (src/, public/, etc.)
- [ ] Tests/checks passing
- [ ] Feature moved to specs/features/
- [ ] backlog.md updated

---

**This is a framework. Adapt to your project while keeping core principles.**

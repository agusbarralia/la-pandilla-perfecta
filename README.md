# La Pandilla Perfecta - Landing Page

Landing page para pet shop "La Pandilla Perfecta". Sitio informativo con ubicación, servicios, marcas y contacto.

## Tech Stack

- **Framework:** Astro (Static Site Generation)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict mode)
- **Package Manager:** npm

## Project Structure

```
pandilla-web/
├── public/              # Static assets (images, favicon)
├── src/
│   ├── components/      # UI components
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # Routes (file-based routing)
│   │   └── index.astro  # Home page (/)
│   ├── styles/          # Global styles
│   │   └── global.css
│   └── lib/             # Utilities, config
│       └── config.ts    # Site config
├── specs/               # SDD specs (backlog, wip, features)
└── dist/                # Build output (gitignored)
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (with hot reload)
npm run dev
# → http://localhost:4321
```

### Build

```bash
# Build for production (generates static HTML/CSS/JS)
npm run build

# Preview production build locally
npm run preview
```

### Code Quality

```bash
# Lint code
npm run lint

# Format code with Prettier
npm run format
```

## Deployment

This project generates a static site. Deploy to any CDN or static host:

- **Netlify:** Connect repo and deploy (zero config)
- **Vercel:** Connect repo and deploy (zero config)
- **GitHub Pages:** Use GitHub Actions workflow

## Development Workflow

This project follows **Spec-Driven Development (SDD)**. See `specs/DEVELOPMENT_WORKFLOW.md` for details.

### Quick workflow

1. Check `specs/backlog.md` for pending features
2. Create feature branch: `git checkout -b feature/feature-name`
3. Create specs in `specs/wip/feature-name/`
4. Implement feature
5. Complete: move specs to `specs/features/`, update backlog, merge to `develop`

## Project Rules

See `.claude/rules.md` for:
- Architectural decisions
- Design rules
- Content sections
- Constraints

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Lint code with ESLint |
| `npm run format` | Format code with Prettier |

## Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

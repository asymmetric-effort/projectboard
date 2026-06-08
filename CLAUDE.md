# CLAUDE.md -- ProjectBoard Conventions

## Project Overview

Multi-tenant, canvas-based project management application.

- **Frontend**: SPA using `@asymmetric-effort/specifyjs` (TypeScript strict mode)
- **Backend**: Vercel serverless functions (TypeScript)
- **Database**: MongoDB (per-tenant isolation)
- **Real-time**: Ably pub/sub
- **Billing**: Stripe
- **Architecture and planning docs live in Confluence (not in this repo)**

## Hard Rules

- **No recursion** -- use iterative approaches (loops, stacks) for all tree/graph traversal
- **TypeScript strict mode** -- no suppressions, no `any` without documented justification
- **Zero third-party API dependencies** -- only vendor SDKs: `mongodb`, `stripe`, `ably`
- **All API requests use POST with JSON body** -- no data in query strings
  - Exception: GitHub OAuth callback (spec-mandated GET)
  - Exception: Stripe webhooks (Stripe-defined format)
- **HTTPS-only** -- use `secureFetch` from specifyjs
- **No default exports** -- named exports only
- **`const` over `let`, never `var`**
- **No planning docs in the repo** -- use Confluence
- Comply with https://coding-standards.asymmetric-effort.com

## Repository Structure

```
ui/          -- SPA frontend (specifyjs + Vite)
api/         -- Vercel serverless functions
git-hooks/   -- pre-commit, pre-push hooks
.github/     -- CI/CD workflows
```

## TypeScript

- Strict mode with `noUnusedLocals`, `noUnusedParameters`, `noImplicitReturns`,
  `noFallthroughCasesInSwitch`, `noUncheckedIndexedAccess`
- Both `ui/` and `api/` extend `tsconfig.base.json` at root

## Frontend (ui/)

- Framework: `@asymmetric-effort/specifyjs`
- Build tool: Vite
- Router: specifyjs hash-based router (`Router`, `Route`, `Link`, `useNavigate`)
- Dev server: port 5173

## Backend (api/)

- Vercel serverless functions in `api/src/functions/`
- Local dev: `vercel dev` CLI on port 3000
- No Express, no third-party middleware
- JWT via Node.js built-in `crypto`

## Testing

- Playwright for E2E and PDV tests
- All tests must pass before merge
- PDV tests run against staging and production

## Commits

- Conventional commits: `feat:`, `fix:`, `test:`, `docs:`, `refactor:`, `perf:`, `chore:`

## Docker

- Build stage: `ubuntu:22.04`
- Runtime stage: Google distroless (`gcr.io/distroless/nodejs22-debian12`)
- No `node:-slim` or `alpine` base images

## Local Development

```bash
docker compose up        # Start projectboard-dev
# UI:      http://localhost:5173
# API:     http://localhost:3000
# MongoDB: localhost:27017

# Git hooks setup
ln -sf ../git-hooks .git/hooks
```

## Security

- See SECURITY.md
- No hardcoded secrets or credentials
- CSP headers enforced
- Automatic HTML escaping

# Contributing to ProjectBoard

Thank you for your interest in contributing to ProjectBoard.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone git@github.com:YOUR_USERNAME/projectboard.git`
3. Install dependencies: `npm install`
4. Set up git hooks: `ln -sf ../git-hooks .git/hooks`

## Before Submitting a PR

1. **Linting** — all linters must pass
2. **Tests** — all tests must pass with zero failures
3. **Coverage** — maintain or improve existing coverage

## Code Style

- TypeScript strict mode
- No `any` types unless documented
- `const` over `let`, never `var`
- Named exports over default exports

## Commit Messages

Use conventional commits:
- `feat:` — new feature
- `fix:` — bug fix
- `test:` — test additions
- `docs:` — documentation
- `refactor:` — code restructuring
- `perf:` — performance improvement
- `chore:` — tooling, CI, etc.

## Intellectual Property

- All code must be original work or compatible with the project license
- Do not copy code from other projects without license verification
- All algorithms implemented from original understanding

## Security

- Report vulnerabilities to security@asymmetric-effort.com
- See SECURITY.md for details

# ProjectBoard

A multi-tenant, canvas-based project management application.

## Local Development

### Prerequisites

- Node.js >= 22
- Docker & Docker Compose

### Setup

```bash
git clone git@github.com:asymmetric-effort/projectboard.git
cd projectboard

# Install git hooks
ln -sf ../git-hooks .git/hooks

# Install dependencies
cd ui && npm install && cd ..
cd api && npm install && cd ..
```

### Run (Docker)

```bash
docker compose up
```

- **UI**: http://localhost:5173
- **API**: http://localhost:3000
- **MongoDB**: localhost:27017

### Run (Local)

```bash
# UI dev server
cd ui && npm run dev

# API dev server (requires Vercel CLI)
cd api && npm run dev
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Security

See [SECURITY.md](SECURITY.md) for reporting vulnerabilities.

## License

This project is licensed under the MIT License. See [LICENSE.txt](LICENSE.txt) for details.

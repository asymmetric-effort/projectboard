# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in ProjectBoard, please report it responsibly.

**Do NOT open a public issue for security vulnerabilities.**

Instead, please email: **security@asymmetric-effort.com**

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

## Response Timeline

- **Acknowledgement**: Within 48 hours
- **Assessment**: Within 7 days
- **Fix release**: As soon as a patch is ready, typically within 14 days

## Supported Versions

| Version | Supported |
|---------|-----------|
| 0.1.x   | ✅ Current |
| < 0.1   | ❌ No      |

## Security Practices

- **SHA-pinned CI/CD** — all GitHub Actions pinned to verified commit hashes
- **HTTPS-only** — rejects plaintext HTTP connections
- **Automatic HTML escaping** — prevents XSS in rendered output
- **CSP headers** — Content-Security-Policy enforced
- **CodeQL analysis** — static security scanning on every push
- **Dependabot** — automated dependency update monitoring

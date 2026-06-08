import { createElement } from '@asymmetric-effort/specifyjs';

export function LoginPage() {
  return createElement('div', { 'data-testid': 'login-page' },
    createElement('h1', null, 'Login'),
    createElement('p', null, 'Authentication will be implemented in Phase 2.'),
  );
}

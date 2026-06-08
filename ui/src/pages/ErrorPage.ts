import { createElement } from '@asymmetric-effort/specifyjs';

export function ErrorPage() {
  return createElement('div', { 'data-testid': 'error-page' },
    createElement('h1', null, 'Error'),
    createElement('p', null, 'Something went wrong.'),
  );
}

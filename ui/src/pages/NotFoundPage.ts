import { createElement } from '@asymmetric-effort/specifyjs';

export function NotFoundPage() {
  return createElement('div', { 'data-testid': 'not-found-page' },
    createElement('h1', null, '404 \u2014 Not Found'),
    createElement('p', null, 'The requested page does not exist.'),
  );
}

import { createElement, Link } from '@asymmetric-effort/specifyjs';

export function HomePage() {
  return createElement('div', { 'data-testid': 'home-page' },
    createElement('h1', null, 'ProjectBoard'),
    createElement('p', null, 'Welcome to ProjectBoard.'),
    createElement('nav', null,
      createElement(Link, { to: '/login' }, 'Login'),
    ),
  );
}

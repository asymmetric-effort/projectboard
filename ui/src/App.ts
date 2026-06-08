import { createElement, Router, Route } from '@asymmetric-effort/specifyjs';
import type { FunctionComponent } from '@asymmetric-effort/specifyjs';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { ErrorPage } from './pages/ErrorPage';
import { NotFoundPage } from './pages/NotFoundPage';

const TypedRoute = Route as unknown as FunctionComponent;

export function App() {
  return createElement(Router, null,
    createElement(TypedRoute, { path: '/', exact: true, component: HomePage }),
    createElement(TypedRoute, { path: '/login', exact: true, component: LoginPage }),
    createElement(TypedRoute, { path: '/error', exact: true, component: ErrorPage }),
    createElement(TypedRoute, { path: '*', component: NotFoundPage }),
  );
}

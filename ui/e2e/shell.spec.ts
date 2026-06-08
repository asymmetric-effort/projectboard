import { test, expect } from '@playwright/test';

test.describe('SPA Shell', () => {
  test('home page renders at /', async ({ page }) => {
    await page.goto('/');
    const heading = page.locator('[data-testid="home-page"] h1');
    await expect(heading).toHaveText('ProjectBoard');
  });

  test('login page renders at /#/login', async ({ page }) => {
    await page.goto('/#/login');
    const heading = page.locator('[data-testid="login-page"] h1');
    await expect(heading).toHaveText('Login');
  });

  test('error page renders at /#/error', async ({ page }) => {
    await page.goto('/#/error');
    const heading = page.locator('[data-testid="error-page"] h1');
    await expect(heading).toHaveText('Error');
  });

  test('404 page renders for unknown routes', async ({ page }) => {
    await page.goto('/#/nonexistent-route');
    const heading = page.locator('[data-testid="not-found-page"] h1');
    await expect(heading).toHaveText('404 \u2014 Not Found');
  });

  test('navigation from home to login works', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#/login"]');
    const heading = page.locator('[data-testid="login-page"] h1');
    await expect(heading).toHaveText('Login');
  });
});

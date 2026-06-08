import { test, expect } from '@playwright/test';

test.describe('Dev Environment', () => {
  test('UI dev server is reachable', async ({ page }) => {
    const response = await page.goto('/');
    expect(response).not.toBeNull();
    expect(response!.status()).toBe(200);
  });

  test('root element exists', async ({ page }) => {
    await page.goto('/');
    const root = page.locator('#root');
    await expect(root).toBeAttached();
  });
});

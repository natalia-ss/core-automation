import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {

  await page.getByRole('button', { name: 'Add to Cart' }).first().click();
  await page.getByRole('link', { name: 'Cart: 1 item(s)' }).click();
  
});
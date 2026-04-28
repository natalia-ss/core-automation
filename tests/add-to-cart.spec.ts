import { test, expect } from '@playwright/test';


test('Product can be added to cart from Home Page', async ({page}) =>{

    await page.goto('https://raider-test-site.onrender.com/');

    await page.getByRole('button', {name: 'Add to Cart'}).first().click();

    await expect(page.getByRole('link', { name: 'Cart: 1 item(s)' })).toContainText('Cart: 1 item(s)')
})

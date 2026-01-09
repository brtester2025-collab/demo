// await page.click('button')
// await page.fill('#user-name', 'admin')
// await page.fill('#password', 'secret_sauce'); // id
// await page.click('text=login') // button




import { test, expect } from '@playwright/test';

test('login page load', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle(/Swag Labs/)
    await page.fill('#user-name', 'standard_user') //id
    await page.fill('input[type=password]', 'secret_sauce')// attribute
    await page.getByRole('button', { name: 'login' }).click()



})









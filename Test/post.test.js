import { test, expect } from '@playwright/test'

test('create API user', async ({ request }) => {
    const response = await request.post('https://dummyjson.com/users/add', {
        data: {
            firstName: 'am',
            lastName: 'tester'
        }

    })
    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.firstName).toBe('am')

    const response1 = await request.get('https://dummyjson.com/users');
    console.log(await response1.json())
})
import { test, expect } from '@playwright/test';


// test("to check the user", async ({ request }) => {
//     const response = await request.get('https://dummyjson.com/users/1');
//     console.log(response.status());

//     expect(response.status()).toBe(200);

//     const body = await response.json()
//     expect(body.id).toBe(1)

// })


test("Response Checking", async ({ request }) => {
    const response = await request.get('https://stonies.co/');
    console.log(response.status());

    expect(response.status()).toBe(200);

    // const body = await response.json()
    // expect(body.id).toBe(1)

})



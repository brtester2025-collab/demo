import { test, expect } from '@playwright/test';



test('Starting......', async ({ request }) => {
    const response = await request.post('https://dummyjson.com/users/add', {
        data: {
            firstName: "Beckom",
            lastName: "Tester",
            maidenName: 'brUstinx',
            age: 20,
            gender: "male",
            email: "beckom@mailinator.com",
            phone: 668885858,
            username: "beck",
            password: 123456,
            birthDate: "2024-01-04"
        }
    })
    const body = await response.json()
    console.log(body);

    expect(response.status()).toBe(201)
    expect(body).toMatchObject({
        id: expect.any(Number),
        firstName: expect.any(String),
        eyeColor: expect.any(String),
        email: expect.any(String),
        birthDate: expect.any(String),
        // image: expect.any(''),
        // bloodGroup: expect.any(String),
        // hair: expect.any({
        //     color: expect.any(String),
        //     type: expect.any(String)
        // }),
        // ip: expect.any(String),
        // address: expect.any({
        //     address: expect.any(String),
        //     city: expect.any(String),
        //     state: expect.any(String),
        //     stateCode: expect(Number),
        //     postalCode: expect.any(String),
        //     coordinates: expect.any({
        //         lat: expect.any(Number),
        //         lng: expect.any(Number)
        //     }),
        //     country: expect.any(String)
        // }),
    })
    // expect(body.address).toBeTruthy()
    // expect(typeof body.eyeColor).toBe('string')
    // expect(typeof body.address).toBe('string')
    // expect(typeof body.address.state).toBe('string')
    // expect(typeof body.address.address.postalCode).toBe('string')
    console.log("The END");

})







// API TEMPLATE 

/*
import { test, expect } from '@playwright/test';

test('API test name', async ({ request }) => {

  // 1. Call API
  const response = await request.post(URL, { data });

  // 2. Status assertion
  expect(response.status()).toBe(EXPECTED_STATUS);

  // 3. Read body
  const body = await response.json();

  // 4. Body assertions
  expect(body.someField).toBeDefined();
});

 */
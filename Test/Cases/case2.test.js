import { test, expect } from '@playwright/test'
test('Create user', async ({ request }) => {
    const response = await request.post('https://dummyjson.com/users/add', {
        data: {
            "id": 101,
            "firstName": "Beckom",
            "hair": {
                "color": "Brown",
                "type": "Curly"
            },
            "address": {
                "city": "Delhi"
            }
        }
    })

    expect(response.status()).toBe(201)
})


// Validate Nested Objected 

test('validate nested hair object for first user', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/users')
    expect(response.status()).toBe(200)

    const body = await response.json()

    // Validate users array
    expect(Array.isArray(body.users)).toBe(true)
    expect(body.users.length).toBeGreaterThan(0)

    // Access first user
    const user = body.users[0]

    // Validate hair object
    expect(user.hair).toBeDefined()
    expect(typeof user.hair).toBe('object')
    expect(typeof user.hair.color).toBe('string')
    expect(typeof user.hair.type).toBe('string')
})


test('LOOP-LOOP', async ({ request }) => {
    const response = await request.get('https://dummyjson.com/users')
    expect(response.status()).toBe(200)
    const body = await response.json();

    for (const user of body.users) {
        expect(user.hair).toBeTruthy();
        expect(typeof user.hair.color).toBe('string');
        expect(typeof user.hair.type).toBe('string')
    }



})


test('LOOP-V2', async ({ request }) => {
    const response = await request.get(`https://dummyjson.com/users`)
    expect(response.status()).toBe(200)
    const body = await response.json();

    for (const user of body.users) {
        expect(typeof user.address).toBeTruthy()
        expect(typeof user.address.state).toBe('string')
        expect(typeof user.address.address).toBe('string')
        expect(typeof user.address.stateCode).toBe('string')
        expect(typeof user.address.postalCode).toBe('string')
        expect(typeof user.address.coordinates).toBeTruthy()
        expect(typeof user.address.coordinates.lat).toBe('number')
        expect(typeof user.address.coordinates.lng).toBe('number')
        expect(typeof user.address.country).toBe('string')
        expect(typeof user.macAddress).toBe('string')
        expect(typeof user.university).toBe()

    }

})

console.log("-----------------------------THE-START---------------------------------");

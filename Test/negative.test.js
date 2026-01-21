import { test, expect, request } from '@playwright/test'


export const API_CONFIG = {
    baseURL: 'https://dummyjson.com',
    headers: {
        'Content-Type': 'application/json'
    }
};

export async function createApiContext() {
    return await request.newContext({
        baseURL: API_CONFIG.baseURL,
        extraHTTPHeaders: API_CONFIG.headers
    });
}

//creating the user and posting in the backend. 
test('create user', async () => {
    const apiContext = await createApiContext();
    const response = await apiContext.post('/users/add', {
        data: {
            Name: 'john'
        }
    })
    expect(response.status()).toBeGreaterThanEqual(400);
})


//posting the user for checking  the negative cases
test('Create apiContext', async () => {
    const apiContext = await createApiContext();
    const response = await apiContext.post('/users/add', {
        data: {
            lastName: 'tester'
        }
    })
})




const apiContext = await request.newContext({
    baseURL: 'https://dummyjson.com'
})

await apiContext.get('/users/1')
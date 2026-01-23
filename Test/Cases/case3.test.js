

import { test, expect } from '@playwright/test'

test('Start checking the process', async ({ request }) => {

    const data = await request.get(`https://dummyjson.com/users/20`)
    const response = await data.json()

    expect(typeof response.id).toBe("number")
    expect(typeof response.address).toBeDefined();
    expect(typeof response.address.address).toBe('string')
    expect(typeof response.address.city).toBe('string')
    expect(typeof response.macAddress).toBe('string')
    expect(typeof response.university).toBe('string')
    expect(typeof response.bank.cardExpire).toBe('string')
    expect(typeof response.bank.currency).toBe('string')
    expect(typeof response.ein).toBe('string')
    expect(typeof response.userAgent).toBe('string')
    expect(typeof response.id).toBe("number")
    expect(typeof response.address).toBeDefined();
    expect(typeof response.address.address).toBe('string')
    expect(typeof response.address.city).toBe('string')
    expect(typeof response.macAddress).toBe('string')
    expect(typeof response.university).toBe('string')
    expect(typeof response.bank.cardExpire).toBe('string')
    expect(typeof response.bank.currency).toBe('string')
    expect(typeof response.ein).toBe('string')
    expect(typeof response.userAgent).toBe('string')
    expect(typeof response.id).toBe("number")
    expect(typeof response.address).toBeDefined();
    expect(typeof response.address.address).toBe('string')
    expect(typeof response.address.city).toBe('string')
    expect(typeof response.macAddress).toBe('string')
    expect(typeof response.university).toBe('string')

})



test('V-start', async ({ request }) => {
    const data = await request.post('https://green.demo-7.com/user/greenexpress/products/productlistwithfilter',
        {
            headers: {
                // 'Content-Type': 'application/json',
                'Accept': 'application/json',
                'origin': 'https://miamigreenexpress.com',
                'isorigin': 'https://miamigreenexpress.com',
                'content-length': '138',
                'referer': 'https://miamigreenexpress.com/'
            },

            data2: {

                "categoryName": "flower",
                "storeId": 88,
                "cateType": [],
                "pageNumber": 1,
                "resPerPage": 16,
                "brand": [],
                "grade": [],
                "tag": [],
                "sortBy": "",
                "weight": []
            }
        }

    )
    console.log(await data.text());

    console.log(data.status());
    const response_data = await data.json()
    console.log(response_data);

})

// HIGHLIFE HEALTH ADMIN PANEL CHECKING RESPONSE TIME


import { test, expect } from '@playwright/test'

test.beforeAll("Start the test here______", async ({ request }) => {

    const response = await request.post('https://cannabis.demo-7.com/admin/highlifehealth/employees/empsignin',
        {
            data: {



            },

        }

    )



})


test("Checking the admin panel", async ({ request }) => {
    const start = Date.now();
    const response = await request.post('https://cannabis.demo-7.com/admin/highlifehealth/employees/empsignin')
    const end = Date.now() - start
    console.log('for checking the status is ok');
    console.log("Checking the response time of this API: ", end);
    expect(end).toBeLessThan(1500)
    expect(response.status()).toBe(200)


})




test("check the Product list Api", async ({ request }) => {
    const start = Date.now()
    const response = await request.post('https://cannabis.demo-7.com/admin/highlifehealth/transferproduct/allproducts', {
        headers: {
            authkey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbXBFbWFpbElEIjoiYWRtaW5AaGlnaGxpZmVoZWFsdGguY29tIiwiZW1wSWQiOiI2NjZjMmIyMzkwYTRhNDAzM2NlYjMwMjgiLCJlbXBOYW1lIjoiSGlnaGxpZmUgSGVhbHRoIiwiZW1wVHlwZSI6IlNVUEVSQURNSU4iLCJzdG9yZUlkIjozNDk2NjksImlhdCI6MTc2OTU5NTk5NywiZXhwIjoxNzcwMjAwNzk3fQ.QHgpuNa27wZK5o1Qep516_RjWdSxSaLVWP8Gz_skC4o'

        },

        data: {
            "resPerPage": 20,
            "page": 1,
            "storeId": "349669",
            "queryData": {},
            "keyword": "",
            "isOutOfStock": false,
            "isNew": ""

        }
    })
    const responseTime = Date.now() - start;
    console.log("The Product Fetching time is: ", responseTime);
    const result = await response.json()
    expect(response.status()).toBe(200)

    console.log(`The Response Time be passed`);
    expect(responseTime).toBeLessThan(2000)

    console.log('TO check the product count fetch from the cova inventory');
    expect(typeof result.count).toBe('number')
    expect(result.count).toBe(938)
    // console.log(result);
})



test("Product without token Fail", async ({ request }) => {
    const response = await request.post('https://cannabis.demo-7.com/admin/highlifehealth/transferproduct/allproducts', {

        data: {
            "resPerPage": 20,
            "page": 1,
            "storeId": "349669",
            "queryData": {},
            "keyword": "",
            "isOutOfStock": false,
            "isNew": ""

        }
    })
    console.log("Failed APi");
    expect(response.status()).toBe(401)


})


// test('for checking the promo bundles', ())
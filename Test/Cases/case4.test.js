
// api response time checking for the products - ---- 



import { test, expect } from '@playwright/test';




test("Start Test Here", async ({ request }) => {
    const start = Date.now()
    const response = await request.post("https://green.demo-7.com/user/greenexpress/products/productlistwithfilter",

        {
            headers: {
                "Isorigin": "https://miamigreenexpress.com",

            },
            data:
            {
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

    console.log("start-time");
    const duration = Date.now() - start
    expect(response.status()).toBe(200)
    console.log("This is response time of API:", duration);
    expect(duration).toBeLessThan(3000)
    console.log("response time is check that << 2000");
    // const data1 = await response.json()




})
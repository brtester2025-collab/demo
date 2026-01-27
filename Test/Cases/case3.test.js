

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



// test('V-start', async ({ request }) => {
//     const data = await request.post('https://green.demo-7.com/user/greenexpress/products/productlistwithfilter',
//         {
//             timeout: 3000,
//             headers: {
//                 // 'Content-Type': 'application/json',
//                 'Accept': 'application/json',
//                 'origin': 'https://miamigreenexpress.com',
//                 'Isorigin': 'https://miamigreenexpress.com',
//                 'content-length': '138',
//                 'referer': 'https://miamigreenexpress.com/',
//                 'user-agent': 'Mozilla/5.0'

//             },

//             data2: {

//                 "categoryName": "flower",
//                 "storeId": 88,
//                 "cateType": [],
//                 "pageNumber": 1,
//                 "resPerPage": 16,
//                 "brand": [],
//                 "grade": [],
//                 "tag": [],
//                 "sortBy": "",
//                 "weight": []
//             }

//         },
//         console.log('Request-test'),
//     )
//     console.log('Request-test');
//     console.log(await data.text());
//     console.log(data.status());
//     const response_data = await data.json()
//     console.log(response_data);

// })



test('V-start - correct way', async ({ request }) => {
    const response = await request.post(
        'https://green.demo-7.com/user/greenexpress/products/productlistwithfilter',
        {
            headers: {
                // 'content-type': 'application/json',
                // 'accept': 'application/json',
                // 'origin': 'https://miamigreenexpress.com',
                // 'referer': 'https://miamigreenexpress.com/',
                'Isorigin': 'https://miamigreenexpress.com',
                // 'user-agent': 'Mozilla/5.0'
            },
            data: {

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

    expect(response.status()).toBe(200)

    // const text = await response.text()
    const data2 = await response.json()
    // console.log(data2);


    for (const i of data2.data) {
        expect(typeof i.brand.brandId).toBe('string')

    }

    for (const j of data2.brandlist) {
        expect(typeof j._id).toBe('string')
    }
    var count = 1;
    for (const k of data2.strainList) {
        console.log('Strain-List');

        expect(typeof k.value).toBe('string')
        console.log('FOR ID CHECKING');
        expect(typeof k._id).toBe('string')
        count++;
    }

    console.log("total items checking: ", count - 1);

    var count = 1;
    // console.log(data2);
    const actual = data2.tagList
        .map(tag => tag.value)
        .sort((a, b) => a.localeCompare(b))

    console.log(actual);


    const expected = [
        '14g/$90',
        'Silver',
        'Platinum',
        'Gold',
        'BRONZE',
        'Diamond'
    ].sort((a, b) => a.localeCompare(b))
    expect(actual).toEqual(expected)
    console.log("Tag iteration: ", count - 1);
    expect(response.status()).toBe(200);

    console.log("TAG-PROPERTY CHECKING");

    data2.tagList.forEach(tag => {
        expect(tag).toHaveProperty('_id')
        expect(tag).toHaveProperty('value')
        expect(tag).toHaveProperty('color')
    })

    console.log("STRAIN-LIST CHECKING");
    data2.strainList.forEach(ox => {
        expect(ox).toHaveProperty('_id')
        expect(ox).toHaveProperty('value')

    })

    console.log("SUB-CATEGORY - CHECKING")
    for (const i of data2.data) {
        i.subCategory.forEach(value => {
            expect(value).toHaveProperty("subCategoryId")
            expect(value).toHaveProperty("subCategoryName")
            expect(value).toHaveProperty("_id")
            expect(value).toHaveProperty("sort")
        })
    }

    console.log("ID-Checking");
    var cnt = 1
    for (const i of data2.data) {
        expect(typeof i._id).toBe("string")
        cnt++;
    }
    console.log("Total no of id in the product: ", cnt - 1);

    console.log('For CustomOption');;
    var cnt2 = 1

    for (const i of data2.data) {
        expect(i).toHaveProperty("customOption")
        i.customOption.forEach(value => {
            expect(value).toHaveProperty("optionTypeId")
            expect(value).toHaveProperty("optionId")
            expect(value).toHaveProperty("weight")
            expect(value).toHaveProperty("price")
            expect(value).toHaveProperty("buyPrice")
            expect(value).toHaveProperty("title")
            expect(value).toHaveProperty("regularPrice")
            // expect(value).toHaveProperty("variantName")

        })
        cnt2++;
    }
    console.log("IDEEE", cnt2 - 1);

    // console.log(data)
})
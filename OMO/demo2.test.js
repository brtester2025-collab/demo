// // function makeGlobalDatabase() {
// //     return 'thing'
// // }


// const globalDatabase = makeGlobalDatabase();

// function cleanUpDatabase(db) {
//     db.cleanUp();
// }

// afterAll(() => {
//     cleanUpDatabase(globalDatabase);
// });

// test('can find things', () => {
//     return globalDatabase.find('thing', {}, results => {
//         expect(results.length).toBeGreaterThan(0);
//     });
// });

// test('can insert a thing', () => {
//     return globalDatabase.insert('thing', makeThing(), response => {
//         expect(response.success).toBeTruthy();
//     });
// });




const myBeverage = {
    delicious: true,
    sour: false
}

describe('myBeverage', () => {
    test('delecious', () => {
        expect(myBeverage.delicious).toBeTruthy();

    })
    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy()
    })
})





describe.each([
    [1, 2, 3],
    [1, 2, 3],
    [1, 1, 2]
])('add(%d,%d)', (a, b, ans) => {
    test('return ${ans}', () => {
        expect(a + b).toBe(ans)
    })

    test(' to fail ${ans}', () => {
        expect(a + b).not.toBeGreaterThan(ans)
    })
})

// const fetchData = jest.fn()
test('the data is peanut butter', async () => {
    fetchData.mockResolvedValue('pea')
    const data = await fetchData();
    console.log(data);
    expect(data).toBe('pea');
});


const fetchData = jest.fn()

test('the call is back', done => {
    fetchData.mockImplementation(cb => {
        cb(null, 'pea')
    })

    function callback(err, data) {
        if (err) {
            done(err)
            return;
        }
        try {
            expect(data).toBe('pea')
            done();
        } catch (error) {
            done(error)
        }

    }


    fetchData(callback)

})


// for checking the object
test('object check', () => {
    const data = {
        one: 1
    }
    data['two'] = 2;

    expect(data).toEqual({ one: 1, two: 2 })
})



test('not a zero', () => {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            expect(i + j).not.toBe(21)
        }
    }
})


// for checking the null

test('to check the truthness', () => {
    const n = null
    expect(n).toBe(null)
    // expect(n).not.toBe(null)
    expect(n).toBeDefined()
    expect(n).not.toBeTruthy()
    expect(n).toBeFalsy()
})


//for floating point number 

test('for addition', () => {
    const val = 2 + 2
    expect(val).toBeGreaterThan(3)
    expect(val).toBeLessThan(5)
    expect(val).toBeGreaterThanOrEqual(3.5)


})

// for teseting the string matcher

test('string matching', () => {
    expect("tyson").toMatch(/y/)
})



// for testing the array

const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
]

test('data', () => {
    expect(shoppingList).toContain('diapers')
    expect(new Set(shoppingList)).toContain('milk')
})


function tester() {
    throw new Error('you are wrong')
}

test('Error', () => {
    expect(() => tester()).toThrow(Error)
})

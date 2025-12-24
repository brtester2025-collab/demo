function divide(a, b) {
    if (b == 1) {
        throw new Error("invalid")
    }
    return a / b;
}

test('throw new error', () => {
    expect(() => divide(10, 1)).toThrow('invalid');
})

// test('check the return value', () => {
    
//     expect(() => divide(10, 1)).toBe(10)
// })



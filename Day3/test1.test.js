const mul = jest.fn();

test('no of testing', () => {
    mul.mockImplementation((a, b) => a * b)
    expect(mul(2, 4)).toBe(8)
})


test('Is Even Number', () => {
    const a = {
        int: 2,
        es_change: true
    }
    const b = {
        int: 3,
        es_change: false

    }

    expect()


})
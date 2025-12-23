test('check sum', () => {
    expect(add(a, b)).to(10)
})

test('comparison', () => {
    expect({ name: 'teter' }).toEqual({ name: 'tester' })
})

test('array contains', () => {
    expect([10, 20, 30]).toContain(20)
})

test('throw error', () => {
    expect(() => {
        throw new Error('fail');
    }).toThrow('fail');
})
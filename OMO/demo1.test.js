
test('resolve lemon', async () => {
    await expect(Promise.resolve('lemon'))
        .resolves.toBe('lemon')
})


test('resolve number', async () => {
    expect(Promise.resolve(12345)).resolves.toBe(12345)

})

test('promise reject', () => {
    return expect(Promise.reject(new Error('ocutpus'))).rejects.toThrow()
})


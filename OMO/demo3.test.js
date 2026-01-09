const a = jest.fn().mockImplementationOnce(() =>
    Promise.resolve(value)
)

test('async test', async () => {
    const asyncMock = jest.fn()
        .mockResolvedValue('default')
        .mockResolvedValueOnce('first call')
        .mockResolvedValueOnce('second call')

    await asyncMock();
    await asyncMock();
    await asyncMock();


})
const login = jest.fn();

test('check', async () => {
    login.mockResolvedValueOnce("OK")
    login.mockRejectedValueOnce(new Error("Invalid"))

    const result = await login('1', 12345)
    expect(result).toBe('OK')
    try {
        await login('2', 12345)

    } catch (err) {
        expect(err.message).toBe('Invalid')

    }
    expect(login).toHaveBeenNthCalledWith(1, '1', 12345)
    expect(login).toHaveBeenNthCalledWith(2, '2', 12345)
})













const login1 = jest.fn();

test('for checking', async () => {
    login1.mockResolvedValueOnce('ok')
    login1.mockRejectedValueOnce(new Error('invalid'))

    await expect(login1('1', 12345)).resolves.toBe('ok')
    await expect(login1('2', 12345)).rejects.toThrow('invalid')

    expect(login1).toHaveBeenNthCalledWith(1, '1', 12345)
    expect(login1).toHaveBeenNthCalledWith(2, '2', 12345)
})

const catcher = jest.fn();
test('to check the status', async () => {
    catcher.mockResolvedValue('API success')
    catcher.mockRejectedValueOnce(new Error('invalid'))

})












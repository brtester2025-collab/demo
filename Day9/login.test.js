const login = jest.fn();

test('Mock value', async () => {
    login.mockResolvedValueOnce("ok");
    login.mockRejectedValueOnce(new Error('Login failed'))

    await expect(login('alice', 12345)).resolves.toBe('ok')
    await expect(login('alice', 123456)).rejects.toThrow('Login failed')

    expect(login).toHaveBeenNthCalledWith(1, 'alice', 12345)
    expect(login).toHaveBeenNthCalledWith(2, 'alice', 123456)

})


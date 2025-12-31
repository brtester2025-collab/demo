const login = jest.fn();

test('login- success', async () => {
    login.mockResolvedValue('login sucess');

    const result1 = await login('admin', '1234')
    const result2 = await login('guest', '0000')

    expect(result1).toBe('login sucess')
    expect(result2).toBe('login sucess')

    expect(login).toHaveBeenCalledTimes(2);
    expect(login).toHaveBeenNthCalledWith(1, 'admin', '1234')
    expect(login).toHaveBeenNthCalledWith(2, 'guest', '0000')

})



test('async login reject on error', async () => {
    login.mockRejectedValue(new Error('invalid Credentials'));

    await expect(login('admin', 'wrong')).rejects.toThrow('invalid Credentials')
})
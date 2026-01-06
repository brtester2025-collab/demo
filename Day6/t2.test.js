const login = jest.fn();

test('test2', async () => {
    login.mockResolvedValueOnce('SUCCESS')
    login.mockRejectedValueOnce(new Error('INVALID PASSWORD'))

    const result = await login("alice", 1234)
    const result2 = await login("alice", 123456);

    expect(result).toBe("alice", 1234)
    expect(result2).toBe('alice', 12345)


    expect(login).toHaveBeenNthCalledWith(1, 'SUCCESS')
    expect(login).toHaveBeenNthCalledWith(2, 'INVALID PASSWORD')



})
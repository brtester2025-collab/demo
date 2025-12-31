// register(name , email)

const register = jest.fn();

test('to register a user', async () => {
    register.mockResolvedValue('register success');
    const user1 = await register('john', '1234', 'id')
    expect(user1).toBe('register success')

})


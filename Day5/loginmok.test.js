const loginUser = jest.fn();

test('login user', () => {
    loginUser('admin', '1234');
    loginUser('guest', '0000');


    expect(loginUser.mock.calls[0][0]).toBe('admin')
    expect(loginUser.mock.calls[0][1]).toBe('1234')
    expect(loginUser.mock.calls[1][0]).toBe('guest')
    expect(loginUser.mock.calls[1][1]).toBe('0000')




    expect(loginUser).toHaveBeenNthCalledWith(1, 'admin', '1234')

})





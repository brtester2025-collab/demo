const saveUser = jest.fn()

test('To check the object', () => {
    saveUser({ name: 'Alice' })
    saveUser({ id: 10 })
    saveUser({ name: "Bob" })
    saveUser({ id: 20 })
    expect(saveUser).toHaveBeenCalledTimes(4);
    expect(saveUser.mock.calls[0][0].name).toBe('Alice')
    expect(saveUser.mock.calls[1][0].id).toBe(10)
    expect(saveUser.mock.calls[2][0].name).toBe('Bob')
    expect(saveUser.mock.calls[3][0].id).toBe(20)

})




const onlyone = jest.fn();

test('check the name', () => {
    onlyone('Alice')

    expect(onlyone.mock.calls[0][0]).toBe('Alice')
})
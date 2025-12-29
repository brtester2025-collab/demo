const checkid = jest.fn()
test('to check the api calls', () => {
    checkid()
    expect(checkid).toHaveBeenCalled()

})
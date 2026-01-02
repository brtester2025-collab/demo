// const add = jest.fn()



// test('to check the mock function',  () => {
//     add.mockReturnValue(10)


//     expect().toBe(10)
// })

const fetchUser = jest.fn();




test('resolves user', async () => {
    fetchUser.mockResolvedValue({ name: 'Alice' });
    const user = await fetchUser();
    expect(user.name).toBe('Alice');
});

test('reject with error', async () => {
    fetchUser.mockRejectedValue(new Error('Network error'))
    await expect(fetchUser()).rejects.toThrow('Network error')
})



// wrong code


const login = jest.fn();

test('check the cases for the mock', async () => {
    login.mockReturnValue("Success")

})

test('error', async () => {
    login.mockRejectedValue(new Error('invalid password'))
})


const add2 = jest.fn();

test("for writing the test", () => {
    add2.mockReturnValue(20);
    expect(add2()).toBe(20)
    add2() //sync function.

})


const zero = jest.fn();
test("checking - 2", () => {
    zero.mockImplementation((a, b) => a + b);
    expect(zero(2, 3)).toBe(5);
})



const login = jest.fn();
test('Status - 3', () => {
    login('admin', '1234')
    login('user', 'abcd')

    console.log(login.mock.calls);
})





const divide = jest.fn();
test("this for division", () => {
    divide.mockImplementation((a, b) => a / b)
    expect(divide(10, 2)).toBe(5)
})
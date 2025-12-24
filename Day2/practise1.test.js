// const userService = {
//     getUser: jest.fn()
// };

// userService.getUser.mockReturnValue({ name: 'Alice' });

// const result = userService.getUser(1);

// expect(userService.getUser).toHaveBeenCalledWith(1);
// expect(result.name).toBe('Alice');



const calcluatePrice = jest.fn();
test("test", () => {
    calcluatePrice()
    calcluatePrice(100);
    expect(calcluatePrice).toHaveBeenCalledWith(100);
    expect(calcluatePrice).toHaveBeenCalledTimes(2);


})



const logMessage = jest.fn();
test('question - 1', () => {
    logMessage("Hello");

    expect(logMessage).toHaveBeenCalledWith("Hello")
    expect(logMessage).toHaveBeenCalledTimes(1)
})


const getNumber = jest.fn()
test('question - 2', () => {
    getNumber(10)
    getNumber()
    expect(getNumber).toHaveBeenCalledWith(10)
    expect(getNumber).toHaveBeenCalledTimes(2)
})









const add = jest.fn();// basic  mock function for testing
test("addition of the two numbers", () => {
    add()
    add(10)
    expect(add).toHaveBeenCalled();
})

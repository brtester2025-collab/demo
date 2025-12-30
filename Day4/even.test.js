const evenNo = jest.fn();
test('to check the even number', () => {
    evenNo.mockImplementation((n) => n % 2 == 0)


    expect(evenNo(10)).toBe(true)
    expect(evenNo).toHaveBeenCalled()
    expect(evenNo).toHaveBeenCalledWith(10)

})





// another way to without adding mock function 

const isEven = (n) => n % 2 === 0;
test('even or odd', () => {
    expect(isEven(4)).toBe(true)
})
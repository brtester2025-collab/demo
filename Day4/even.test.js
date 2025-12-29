const evenNo = jest.fn();
test('to check the even number', () => {
    evenNo.mockImplementation((n) => n % 2 == 0)


    expect(evenNo(10)).toBe(true)
    expect(evenNo).toHaveBeenCalled()
    expect(evenNo).toHaveBeenCalledWith(10)

})
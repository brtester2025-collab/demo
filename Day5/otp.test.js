const mobile = jest.fn();


test('check the OTP', async () => {
    mobile.mockResolvedValue('1234')

    const result = await mobile(123456789);
    const result2 = await mobile(1223456789);

    expect(mobile).toHaveBeenNthCalledWith(1, 123456789);
    expect(mobile).toHaveBeenNthCalledWith(2, 1223456789);

    expect(mobile).toHaveBeenCalledTimes(2)


});
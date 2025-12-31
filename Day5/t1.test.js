const sendEmail = jest.fn();

test('to check the email', async () => {
    sendEmail.mockResolvedValue("SENT");

    const mail = await sendEmail("a@test.com", "Hello")

    expect(mail).toBe("SENT")
    expect(sendEmail).toHaveBeenCalledWith("a@test.com", "Hello")
})
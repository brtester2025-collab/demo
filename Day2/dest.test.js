const sentEmail = jest.fn();
sentEmail('tester@mailinator.com', 'ok');

test('check', () => {
    expect(sentEmail).toHaveBeenCalledWith('tester@mailinator.com', 'ok')
})


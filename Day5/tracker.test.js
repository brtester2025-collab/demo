const createuser = jest.fn();

test('tracking', async () => {
    // Arrange (behavior per call)
    createuser
        .mockResolvedValueOnce('CREATED')
        .mockResolvedValueOnce('ALREADY_EXISTS');

    // Act
    const result1 = await createuser('sam', 'developer');
    const result2 = await createuser('sam', 'developer2');

    // Assert behavior (return values)
    expect(result1).toBe('CREATED');
    expect(result2).toBe('ALREADY_EXISTS');

    // Assert side effects (calls)
    expect(createuser).toHaveBeenNthCalledWith(1, 'sam', 'developer');
    expect(createuser).toHaveBeenNthCalledWith(2, 'sam', 'developer2');
});
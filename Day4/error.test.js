const throwError = () => {
    throw new Error('Boom');
};

test('check the error function', () => {
    expect(() => throwError()).toThrow('Boom')
})
const fetchOrder = jest.fn();

test('for order checking', async () => {
    fetchOrder.mockResolvedValueOnce({ id: 1, details: true })
    fetchOrder.mockResolvedValueOnce({ id: 2, details: false })


    const result = await fetchOrder(1, true)
    const result2 = await fetchOrder(2, false)

    expect(result).toEqual({ id: 1, details: true })

    expect(fetchOrder).toHaveBeenNthCalledWith(1, 1, true)
    expect(fetchOrder).toHaveBeenNthCalledWith(2, 2, false)

})
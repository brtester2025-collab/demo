
jest.mock('./priceApi', () => ({
    getPrice: jest.fn(() =>
        100
    )
}))

import { calculateTotal } from "./orderService";

test('check the total for quantity 2', () => {
    const total = calculateTotal(2);
    expect(total).toBe(200)
});
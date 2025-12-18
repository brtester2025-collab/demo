jest.mock('./math', () => ({
    add: jest.fn(() => 100)
}));


import { calculate } from './calulator.js';


test('return mocked value', () => {
    expect(calculate(1, 2)).toBe(100)
})
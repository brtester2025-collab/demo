jest.mock('./add', () => ({
    add: jest.fn(() => 10),
}))

import { add } from './add';

test('add', () => {
    expect(add(2, 3)).toBe(10);
})
import { failure, success } from "./utils";

jest.mock('./utils', () => ({
    success: jest.fn(() => 'mocked success'),
    failure: jest.fn(() => 'failure'),
}));



import { handle } from "./handler";

test('return mocked success', () => {
    expect(handle()).toBe('mocked success')
})


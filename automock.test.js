import { fetchData } from './ai.js';
import { divide } from './ai.js';
import { getUser } from './ai.js';

describe('Start', () => {

    test('fetch data', async () => {
        const data = await fetchData();
        expect(data).toBeDefined();
    });


    test('Divide two number', () => {
        expect(divide(10, 2)).toBe(5);
    })

    jest.mock('./ai.js', () => ({
        getUser: jest.fn(() =>
            ({ name: "Mock User" }))
    }))

})

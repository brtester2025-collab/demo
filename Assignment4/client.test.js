import { getToken } from "./config";

jest.mock('./client', () => ({
    getToken: jest.fn(),
}))


test('checking the token status'), async () => {
    getToken.mockResolvedValue({
        token: 'mock-token',
    })

}

const result = await config();

expect(result).toBe('mock-token')
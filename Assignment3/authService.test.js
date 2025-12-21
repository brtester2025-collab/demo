jest.mock('./authApi', () => ({
    loginApi: jest.fn(),
}));

import { loginApi } from './authApi';
import { login } from './authService';

test('login success returns token', async () => {
    loginApi.mockResolvedValue({
        token: 'mock-token',
    });

    const result = await login('user', 'secret');

    expect(result).toBe('mock-token');
});


/*

test('login failure returns LOGIN_FAILED', async () => {
  loginApi.mockRejectedValue(new Error('Invalid credentials'));

  const result = await login('user', 'wrong-password');

  expect(result).toBe('LOGIN_FAILED');
});

*/
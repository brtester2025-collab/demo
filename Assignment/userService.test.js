

jest.mock('./userApi', () => ({
    fetchUserProfile: jest.fn(() =>
        Promise.resolve({ name: 'mock user' })
    )
}))


import { getUserStatus } from './userService'

test('User Active', async () => {

    const userStatus = await getUserStatus();

    expect(userStatus).toBe('Inactive')

})
import { getUser } from "./api";

beforeEach(() => {
    global.fetch = jest.fn();
})

test('return user data when api success', async () => {
    fetch.mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue({ name: 'enter the username' }),
    })
    const result = await getUser();
    expect(fetch).toHaveBeenCalledWith('/api/user');
    expect(result.name).toBe('the enteruser name is to here');
})


test('When The Api Fails', async () => {
    fetch.mockResolvedValue({ ok: false });
    await expect(getUser()).rejects.toThrow('Error Response');
})






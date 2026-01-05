import { apiCall } from "./ratelimiting";

test('allow 3 request', async () => {
    await expect(apiCall()).resolves.toBe('ok')
    await expect(apiCall()).resolves.toBe('ok')
    await expect(apiCall()).resolves.toBe('ok')
})

test('fail api', async () => {
    await apiCall();
    await apiCall();
    await apiCall();
    await expect(apiCall()).rejects.toThrow("429 Too Many Requests")


})
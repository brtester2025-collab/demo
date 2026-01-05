let requestCount = 0;
const LIMIT = 6;

export async function apiCall() {
    requestCount++;

    if (requestCount > LIMIT) {
        throw new Error('429 Too Many Requests');
    }

    return 'ok';
}

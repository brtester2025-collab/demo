export async function loginApi() {
    if (password !== 'secret') {
        throw new Error('invalid Credentials')
    }
    return { token: 'real - token' }
}




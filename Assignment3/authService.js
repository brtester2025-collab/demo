import { loginApi } from "./authApi";

export async function login(username, password) {
    try {
        const result = await loginApi(username, password);
        return result.token;
    } catch (err) {
        return 'LOGIN_FAILED';
    }
}
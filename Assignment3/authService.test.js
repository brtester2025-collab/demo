import { loginApi } from "./authApi";

jest.mock('./authApi', () => ({
    loginApi: jest.fn(() => {
        status: 1

    })
}))





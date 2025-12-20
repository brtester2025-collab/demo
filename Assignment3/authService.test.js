import { loginApi } from "./authApi";

jest.mock('./authApi', () => ({
    loginApi: jest.fn(() => {
        status: 1

    })
}))




// dont know the solution of this question in the words 



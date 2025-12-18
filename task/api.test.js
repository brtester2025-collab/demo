

jest.mock('./api', () => ({

    /*
      jest.fn()     → fake function
      Promise.resolve → async behavior
      Mock User       → fake response
    */



    // property name of the object 
    fetchUser: jest.fn(() =>   // Creating the fake function  fetch user
        Promise.resolve({ name: "Mock User" }) // when called return a resolved promise with name  " Mock user"
    )
})) // defining the mocked version of the real fetchUser function


import { getUserName } from "./service.js";
test('return  a mock User Name', async () => {
    const name = await getUserName();
    expect(name).toBe('Mock User')
})

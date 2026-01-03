// src/setup-jest.ts
import 'jest-preset-angular/setup-jest';

createUser(user: User): Observable < User > {
    return this.http.post<User>(this.apiUrl, user);
}
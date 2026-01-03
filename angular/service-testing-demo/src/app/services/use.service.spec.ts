// user.service.spec.ts   (or use.service.spec.ts – whatever your file is named)

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService, User } from './use.service';   // ← Fixed the import path + export both
import { error } from 'node:console';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensures no outstanding HTTP requests
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should retrieve users from the API via GET', () => {
    const dummyUsers: User[] = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];

    // Act: call the service
    service.getAllUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUsers);

    });

    // Assert: exactly one GET request to this URL
    const req = httpMock.expectOne('https://api.example.com/users');
    expect(req.request.method).toBe('GET');

    // Respond with mock data
    req.flush(dummyUsers);
  });

  // Bonus: even cleaner Jest style (most teams use this)
  test('should retrieve users (modern Jest style)', () => {
    const mockUsers: User[] = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ];

    service.getAllUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });

    httpMock
      .expectOne(req => req.method === 'GET' && req.url === 'https://api.example.com/users')
      .flush(mockUsers);
  });




  test('Api failure', () => {
    const message = "error message"
    service.getAllUsers().subscribe({
      next: () => fail("should have failed with 500 error"),
      error: (error) => {
        expect(error.status).toBe(500)
        expect(error.statusText).toBe(message)
      }
    })
    const req = httpMock.expectOne("here api calling is taking place")
    req.flush(message, { status: 500, statusText: message })
  })

  //   createUser(user: User): Observable < User >
  //{
  //     return this.http.post<User>(this.apiUrl, user);
  // }

  test('to check the user', () => {
    const user: User = { id: 1, name: 'bob' }
    service.createUser(user).subscribe(user1 => {
      expect(user1).toEqual(user)
    })
    const req = httpMock.expectOne('URL')
    expect(req.request.method).toBe('post')
    expect(req.request.body).toEqual(user)
    req.flush(newUser);

  })






});
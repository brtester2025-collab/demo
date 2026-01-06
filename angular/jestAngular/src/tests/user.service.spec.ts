import { TestBed } from '@angular/core/testing';

import { UserService } from '../app/services/user.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { error } from 'console';

describe('UserService', () => {
  let service: UserService;
  let HttpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService)
    HttpMock = TestBed.inject(HttpTestingController)

  });


  // afterEach(() => {
  //   HttpMock.verify()
  // })

  test('should return the data', () => {
    const mockResponse = { name: 'alice' }

    service.getUser().subscribe(data => {
      expect(data).toEqual(mockResponse)
    })
    const req = HttpMock.expectOne('/api/user');
    expect(req.request.method).toBe('GET')
    req.flush(mockResponse)

  })


  test('Error handling', () => {
    service.getUser().subscribe({
      next: () => fail('should not succeed'),
      error: (error) => {
        expect(error.status).toBe(500)
        expect(error.statusText).toBe("Server Error")
      }
    })

    const req = HttpMock.expectOne('/api/user')
    expect(req.request.method).toBe("GET")

    req.flush('Error', {
      status: 500,
      statusText: "Server Error"
    })

  })

});

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';

describe('user service', () => {
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    })
    httpMock = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpMock.verify();
  });

  test('get user with id', async () => {
    const userData = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496'
        }
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
      }
    }

    const service = TestBed.inject(UserService);
    const user = await service.getUser('1')

    const req = httpMock.expectOne('https://jsonplaceholder.typicode.com/users/1')
    req.flush(userData)

    expect(req.request.method).toBe('GET')
    expect(user).toMatchObject({
      id: 1,
      firstName: 'Leanne',
      lastName: 'Graham',
      email: 'sincere@april.biz',
      isAnonymous: false
    })
  })
})
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractProviders } from '@ng-clean-architecture/admin/application';
import { Model } from '@ng-clean-architecture/admin/domain';
import { User } from './model';

@Injectable()
export class UserService implements AbstractProviders.AUserService {
  constructor(
    private readonly httpClient: HttpClient
  ) {}

  async getUser(id: string): Promise<Model.User> {
    const user = await this.httpClient
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .toPromise()

    return this.mapUser(user)
  }

  private mapUser(user: User): Model.User {
    const [firstName, lastName] = user.name.split(' ')

    return {
      id: user.id.toString(),
      firstName,
      lastName,
      email: user.email.toLowerCase(),
      isAnonymous: false
    }
  }
}
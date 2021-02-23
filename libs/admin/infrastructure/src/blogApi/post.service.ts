import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractProviders } from '@ng-clean-architecture/admin/application';
import { Model as DomainModel } from '@ng-clean-architecture/admin/domain';
import { Post }from './model';

@Injectable()
export class PostService implements AbstractProviders.APostService {
  constructor(
    private readonly httpClient: HttpClient,
    private readonly userService: AbstractProviders.AUserService
  ) {}

  async getPosts(): Promise<DomainModel.Post[]> {
    const posts = await this.httpClient
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .toPromise()

    return Promise.all(
      posts.map(p => this.mapPost(p))
    )
  }

  private async mapPost(post: Post): Promise<DomainModel.Post> {
    const user = await this.userService.getUser(post.userId.toString());

    return {
      id: post.id.toString(),
      title: post.title,
      content: post.body,
      user,
    }
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractProviders } from '@ng-clean-architecture/admin/application';
import { Model as DomainModel } from '@ng-clean-architecture/admin/domain';
import { Comment } from './model';

@Injectable()
export class CommentService implements AbstractProviders.ACommentService {
  constructor(
    private readonly httpClient: HttpClient
  ) {}

  async getComments(postId: string): Promise<DomainModel.Comment[]> {
    const comments = await this.httpClient
      .get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .toPromise()

    return comments.map(this.mapComment)
  }

  private mapComment(comment: Comment): DomainModel.Comment {
    const email = comment.email.toLowerCase()

    return {
      id: comment.id.toString(),
      text: comment.body,
      user: {
        id: `anon-${email}`,
        email,
        isAnonymous: true,
      }
    }
  }
}
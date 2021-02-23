import { Model } from '@ng-clean-architecture/admin/domain';

export abstract class ACommentService {
  abstract getComments(postId: string): Promise<Model.Comment[]>
}
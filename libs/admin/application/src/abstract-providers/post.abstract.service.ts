import { Model } from '@ng-clean-architecture/admin/domain';

export abstract class APostService {
  abstract getPosts(): Promise<Model.Post[]>
}
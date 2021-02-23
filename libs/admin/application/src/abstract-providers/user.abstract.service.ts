import { Model } from '@ng-clean-architecture/admin/domain';

export abstract class AUserService {
  abstract getUser(id: string): Promise<Model.User>
}
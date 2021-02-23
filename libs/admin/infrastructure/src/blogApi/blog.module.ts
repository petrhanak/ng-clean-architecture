import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AbstractProviders } from '@ng-clean-architecture/admin/application';
import { CommentService } from './comment.service';
import { PostService } from './post.service';
import { UserService } from './user.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    { provide: AbstractProviders.APostService, useClass: PostService },
    { provide: AbstractProviders.AUserService, useClass: UserService },
    { provide: AbstractProviders.ACommentService, useClass: CommentService },
  ]
})
export class BlogModule {}

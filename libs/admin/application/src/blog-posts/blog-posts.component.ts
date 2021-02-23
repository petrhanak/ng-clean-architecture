import { Component, OnInit } from '@angular/core';
import { Model } from '@ng-clean-architecture/admin/domain';
import { ACommentService, APostService } from '../abstract-providers';

@Component({
  selector: 'ng-clean-architecture-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss'],
})
export class BlogPostsComponent implements OnInit {
  posts: Model.Post[]
  isLoading = true
  activePostId: string = null
  comments: Model.Comment[]

  constructor(
    private readonly postService: APostService,
    private readonly commentService: ACommentService
  ) {}

  async ngOnInit() {
    this.posts = await this.postService.getPosts()
    this.isLoading = false
  }

  async openComments(postId: string) {
    this.comments = []
    this.activePostId = postId
    this.comments = await this.commentService.getComments(postId)
  }
}
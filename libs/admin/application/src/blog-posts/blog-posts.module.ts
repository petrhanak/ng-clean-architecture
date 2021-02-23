import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent } from './blog-posts.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BlogPostsComponent],
  exports: [BlogPostsComponent]
})
export class BlogPostsModule {}

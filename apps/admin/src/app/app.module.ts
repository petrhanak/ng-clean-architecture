import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogPostsModule } from '@ng-clean-architecture/admin/application';
import { BlogModule } from '@ng-clean-architecture/admin/infrastructure';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    BlogPostsModule,
    BlogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from '@ngca/app/web/app/app-routing.module'
import { AppComponent } from '@ngca/app/web/app/app.component'
import { ExampleModule } from '@ngca/module/main/feature';
import { ScullyLibModule } from '@scullyio/ng-lib'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ExampleModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

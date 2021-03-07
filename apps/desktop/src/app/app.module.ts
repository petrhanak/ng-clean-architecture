import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from '@ngca/app/desktop/app/app-routing.module'
import { AppComponent } from '@ngca/app/desktop/app/app.component'
import { ExampleModule } from '@ngca/module/main/feature'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ExampleModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

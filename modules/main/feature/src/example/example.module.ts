import { NgModule } from '@angular/core';
import { UiModule } from '@ngca/module/main/core'
import { ExampleComponent } from '@ngca/module/main/feature/example/example.component'

@NgModule({
  declarations: [ExampleComponent],
  imports: [
    UiModule
  ],
  exports: [ExampleComponent]
})
export class ExampleModule { }

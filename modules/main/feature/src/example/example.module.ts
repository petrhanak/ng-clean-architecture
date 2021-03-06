import { NgModule } from '@angular/core'
import { UiModule } from '@ngca/module/main/core'
import { AnotherComponent } from '@ngca/module/main/feature/example/another.component'
import { ExampleComponent } from '@ngca/module/main/feature/example/example.component'

@NgModule({
  declarations: [ExampleComponent, AnotherComponent],
  imports: [UiModule],
  exports: [ExampleComponent, AnotherComponent],
})
export class ExampleModule {}

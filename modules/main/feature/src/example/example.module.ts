import { NgModule } from '@angular/core'
import { UiModule } from '@ngca/module/main/core'
import { AnotherComponent } from '@ngca/module/main/feature/example/another.component'
import { ExampleComponent } from '@ngca/module/main/feature/example/example.component'
import { FormatCaseService } from '@ngca/module/main/feature/example/format-case.service'
import { ThemeSwitcherComponent } from '@ngca/module/main/feature/theme-switcher/theme-switcher.component'

@NgModule({
  declarations: [ExampleComponent, AnotherComponent, ThemeSwitcherComponent],
  imports: [UiModule],
  providers: [FormatCaseService],
  exports: [ExampleComponent, AnotherComponent],
})
export class ExampleModule {}

import { Component } from '@angular/core'

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  public forceLight() {
    document.body.classList.remove('force-dark-theme')
    document.body.classList.add('force-light-theme')
  }

  public forceDark() {
    document.body.classList.remove('force-light-theme')
    document.body.classList.add('force-dark-theme')
  }
}

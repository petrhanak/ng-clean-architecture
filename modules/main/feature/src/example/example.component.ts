import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'
import { FormatCaseService } from '@ngca/module/main/feature/example/format-case.service'

@Component({
  selector: 'lib-feature',
  template: `
    <p>
      <lib-another></lib-another>
      feature works!
      {{ count }}
      <br />
      <main-core-ui-modal></main-core-ui-modal>
      {{ text }}
      <theme-switcher></theme-switcher>
    </p>
  `,
  styles: [],
})
export class ExampleComponent implements OnInit {
  public count = 0
  public readonly text: string

  constructor(formatCaseService: FormatCaseService) {
    this.text = formatCaseService.camelize('hello_world-foo bar')
  }

  public ngOnInit(): void {
    const counter = interval(1000)

    counter.subscribe((num) => (this.count = num))
  }
}

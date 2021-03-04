import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'
import {camelize} from 'humps'

@Component({
  selector: 'lib-feature',
  template: `
    <p>
      feature works!
      {{count}}
      <br/>
      <main-core-ui-modal></main-core-ui-modal>
      {{text}}
    </p>
  `,
  styles: [
  ]
})
export class ExampleComponent implements OnInit {
  count: number = 0
  text: string

  constructor() {
    this.text = camelize('hello_world-foo bar')
  }

  ngOnInit(): void {
    const counter = interval(1000);

    counter.subscribe(num => this.count = num)
  }

}

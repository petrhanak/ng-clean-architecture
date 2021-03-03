import { Component, OnInit } from '@angular/core'
import { interval } from 'rxjs'

@Component({
  selector: 'lib-feature',
  template: `
    <p>
      feature works!
      {{count}}
    </p>
  `,
  styles: [
  ]
})
export class FeatureComponent implements OnInit {
  count: number = 0

  constructor() { }

  ngOnInit(): void {
    const counter = interval(1000);

    counter.subscribe(num => this.count = num)
  }

}

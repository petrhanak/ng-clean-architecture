import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-feature',
  template: `
    <p>
      feature works!
    </p>
  `,
  styles: [
  ]
})
export class FeatureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

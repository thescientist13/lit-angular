import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { html, render } from 'lit-html';

@Component({
  selector: 'app-lit',
  template: ''
})

export class LitComponent {
  title = 'Angular Component w/ lit?';
  counter = 0;

  constructor(private ref: ChangeDetectorRef, private zone: NgZone) {
    const element = document.getElementsByTagName('app-lit');

    console.log('element', element[0]);
    console.log('title', this.title);

    render(html`
      <h1>${this.title}</h1>
      
      <input value="${this.counter}" @input="${(e) => {
        console.log('on enter???', e.target.value);
        this.counter = e.target.value;
        // this.ref.markForCheck();
        // this.zone.run(() => {
        //   this.counter = e.target.value;
        //   console.log('in the zone?')
        //   console.log('counter', this.counter);
        // });
      }}">

      <span>Result: ${this.counter}</span>
    `, element[0]);

    this.ref.markForCheck();
  }
}
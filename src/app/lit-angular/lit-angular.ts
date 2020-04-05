import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { html, render } from 'lit-html';

@Component({
  selector: '[appLitAngular]',
  template: ''
})

export class LitAngular extends Component {
  // _template = '';

  constructor() {
    super({});
  }

  render(ref, template) {
    render(template, document.getElementsByTagName('app-heroes-lit')[0]);
  }
}
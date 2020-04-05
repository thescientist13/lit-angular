import { Component } from '@angular/core';
import { LitAngular } from '../lit-angular/lit-angular';
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';

@Component({
  selector: 'app-heroes-lit',
  template: ''
})

export class HeroesLitComponent extends LitAngular {
  title = 'Tour of Heroes: LitAngular';
  heroes = [{
    id: 1,
    name: 'Windstorm'
  }, {
    id: 2,
    name: 'Bombasto'
  }, {
    id: 3,
    name: 'Magneta'
  }];

  constructor() {
    super();
    
    this.render(this, html`
      <h1>${this.title}</h1>
      <h2>Heroes:</h2>
      <ul>
        ${repeat(this.heroes, (hero) => hero.id, (hero) => html`
          <li>${hero.name}</li>
        `)}
      </ul>
    `);
  }
}
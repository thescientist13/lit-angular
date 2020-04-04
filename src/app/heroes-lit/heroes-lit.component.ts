import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lit',
  template: `
    <h1>{{title}}</h1>
    <h2>Heroes:</h2>
    <ul>
      TODO
    </ul>
  `
})

export class HeroesLitComponent {
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
}
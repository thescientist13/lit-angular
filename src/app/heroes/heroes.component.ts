import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  template: `
    <h1>{{title}}</h1>
    <h2>Heroes:</h2>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.name }}
      </li>
    </ul>
  `
})

export class HeroesComponent {
  title = 'Tour of Heroes: Angular';
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
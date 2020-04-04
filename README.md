# LitAngular

This is an expiremental repo for seeing if there is a way to substitute Angular's default "proprietary" templating engine with something more JavaScript based, e.g. (tagged) template literals.  Using something like [lit-html](https://lit-html.polymer-project.org/).

Essentially, for a given `Component` like below:

```js
export class HerosComponent {
  title = 'Tour of Heroes';
  heroes = [{
    id: 1
    name: 'Windstorm'
  }, {
    id: 2
    name: 'Bombasto'
  }, {
    id: 3
    name: 'Magneta'
  }];
}
```

Instead of an Angular template like this:

```html
<h1>{{title}}</h1>
<h2>Heroes:</h2>
<ul>
  <li *ngFor="let hero of heroes">
    {{ hero }}
  </li>
</ul>
```

You would be able to write it like this:

```html
<h1>${title}</h1>
<h2>Heroes:</h2>
<ul>
  ${repeat(heroes, (hero) => hero.id, (hero, index) => html`
    <li>${index}: ${hero.name}</li>
  `)}
</ul>
```

## Setup

Run `yarn install`

## Commands

- Run `yarn start` to start a local dev server with live reload.
- Run `yarn build` to build the project.
- Run `yarn serve` to see a production build locally.

See this project's [_package.json_](./package.json) `scripts` for other default commands from the Angular CLI.

> This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0..  DEV and PROD servers both run on `http://localhost:4200`.
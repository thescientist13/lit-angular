import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesLitComponent} from './heroes-lit/heroes-lit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesLitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
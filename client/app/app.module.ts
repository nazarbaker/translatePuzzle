import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { WordsComponent }   from './components/words/words.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WordsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

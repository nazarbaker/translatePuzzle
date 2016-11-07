import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WordsComponent } from './components/words/words.component';
import { PuzzleComponent } from './components/puzzle/puzzle.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, WordsComponent, PuzzleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

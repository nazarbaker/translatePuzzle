import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { WordsComponent } from './components/words/words.component';
import { PuzzleComponent } from './components/puzzle/puzzle.component';
import { WordsService } from './services/words.service';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
         {
           path: 'words',
           component: WordsComponent
         },
         {
           path: 'puzzle',
           component: PuzzleComponent
         },
         {
           path: '',
           redirectTo: '/words',
           pathMatch: 'full'
         },
       ])
   ],
  declarations: [ AppComponent, WordsComponent, PuzzleComponent ],
  providers: [
     WordsService
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }

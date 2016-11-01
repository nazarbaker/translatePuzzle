import { Component } from '@angular/core';
import { WordsService } from './services/words.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[WordsService]
})

export class AppComponent { }

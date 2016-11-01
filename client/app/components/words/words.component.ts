import { Component } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { Words } from '../../../Words';

@Component({
  moduleId: module.id,
  selector: 'words',
  templateUrl: 'words.component.html'
})

export class WordsComponent {
  words: Words[];

    constructor(private wordsService: WordsService) {
      this.wordsService.getTasks()
          .subscribe(words => {
            this.words = words;
          });
    }
}

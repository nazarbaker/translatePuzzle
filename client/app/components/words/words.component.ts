import { Component } from '@angular/core';
import { WordsService } from '../../services/words.service';

@Component({
  moduleId: module.id,
  selector: 'words',
  templateUrl: 'words.component.html'
})

export class WordsComponent {
    constructor(private wordsService: WordsService) {

    }
}

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
  english: string;
  ukrainian: string;
  _id: string;

  constructor(private wordsService: WordsService) {
    this.wordsService.getWords()
        .subscribe(words => {
          this.words = words;
        });
  }

  addWords(event) {
    event.preventDefault();
    const newWords = {
      english: this.english,
      ukrainian: this.ukrainian
    };

    this.wordsService.addWords(newWords)
        .subscribe(words => {
          this.words.push(words);
          this.english = '';
          this.ukrainian = '';
        });
  }

  deleteWords(id) {
    const words = this.words;

    this.wordsService.deleteWords(id).subscribe(data => {
      if (data.n === 1) {
        for (let i = 0; i < words.length; i++) {
          if (words[i]._id === id) {
            words.splice(i, 1);
          }
        }
      }
    });
  }
}

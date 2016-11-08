import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
import { WordsService } from '../../services/words.service';
import { Words } from '../../../Words';
import { Injectable } from '@angular/core';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'puzzle',
  templateUrl: 'puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})

@Injectable()
export class PuzzleComponent implements OnInit {
  words: Words[];
  english: string;
  ukrainian: string;
  _id: string;
  number: number;

  constructor(private _elRef: ElementRef, private wordsService: WordsService) {
    this.wordsService.getWords()
        .subscribe(words => {
          this.number = Math.floor(Math.random() * words.length)
          this.words = words
          this.english = this.words[this.number].english
          this.ukrainian = this.words[this.number].ukrainian
        });
  }

  ngOnInit():any {
    jQuery(this._elRef.nativeElement).find('.flashcard').on('click', function() {
      jQuery('.flashcard').toggleClass('flipped');
    });
  }
}

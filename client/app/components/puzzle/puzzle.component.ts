import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';

import { WordsService } from '../../services/words.service';
import { Puzzle } from '../../Puzzle';

declare var jQuery: any;

@Component({
  moduleId: module.id,
  selector: 'puzzle',
  templateUrl: 'puzzle.component.html',
  styleUrls: ['./puzzle.component.css']
})

export class PuzzleComponent implements OnInit {
  constructor(private _elRef: ElementRef) {}

  ngOnInit():any {
    jQuery(this._elRef.nativeElement).find('.flashcard').on('click', function() {
      $('.flashcard').toggleClass('flipped');
    });
  }
}

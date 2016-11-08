"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var words_service_1 = require('../../services/words.service');
var core_3 = require('@angular/core');
var PuzzleComponent = (function () {
    function PuzzleComponent(_elRef, wordsService) {
        var _this = this;
        this._elRef = _elRef;
        this.wordsService = wordsService;
        this.wordsService.getWords()
            .subscribe(function (words) {
            _this.number = Math.floor(Math.random() * words.length);
            _this.words = words;
            _this.english = _this.words[_this.number].english;
            _this.ukrainian = _this.words[_this.number].ukrainian;
        });
    }
    PuzzleComponent.prototype.nextWords = function () {
        var _this = this;
        this.wordsService.getWords()
            .subscribe(function (words) {
            _this.number = Math.floor(Math.random() * words.length);
            _this.words = words;
            _this.english = _this.words[_this.number].english;
            _this.ukrainian = _this.words[_this.number].ukrainian;
        });
    };
    PuzzleComponent.prototype.ngOnInit = function () {
        jQuery(this._elRef.nativeElement).find('.flashcard').on('click', function () {
            jQuery('.flashcard').toggleClass('flipped');
        });
    };
    PuzzleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'puzzle',
            templateUrl: 'puzzle.component.html',
            styleUrls: ['./puzzle.component.css']
        }),
        core_3.Injectable(), 
        __metadata('design:paramtypes', [core_2.ElementRef, words_service_1.WordsService])
    ], PuzzleComponent);
    return PuzzleComponent;
}());
exports.PuzzleComponent = PuzzleComponent;
//# sourceMappingURL=puzzle.component.js.map
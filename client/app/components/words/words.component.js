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
var words_service_1 = require('../../services/words.service');
var WordsComponent = (function () {
    function WordsComponent(wordsService) {
        var _this = this;
        this.wordsService = wordsService;
        this.wordsService.getWords()
            .subscribe(function (words) {
            _this.words = words;
        });
    }
    WordsComponent.prototype.addWords = function (event) {
        var _this = this;
        event.preventDefault();
        var newWords = {
            english: this.english,
            ukrainian: this.ukrainian
        };
        this.wordsService.addWords(newWords)
            .subscribe(function (words) {
            _this.words.push(words);
            _this.english = '';
            _this.ukrainian = '';
        });
    };
    WordsComponent.prototype.deleteWords = function (id) {
        var words = this.words;
        this.wordsService.deleteWords(id).subscribe(function (data) {
            if (data.n === 1) {
                for (var i = 0; i < words.length; i++) {
                    if (words[i]._id === id) {
                        words.splice(i, 1);
                    }
                }
            }
        });
    };
    WordsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'words',
            templateUrl: 'words.component.html'
        }), 
        __metadata('design:paramtypes', [words_service_1.WordsService])
    ], WordsComponent);
    return WordsComponent;
}());
exports.WordsComponent = WordsComponent;
//# sourceMappingURL=words.component.js.map
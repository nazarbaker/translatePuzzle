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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var WordsService = (function () {
    function WordsService(http) {
        this.http = http;
        console.log('Words Service Initialized...');
    }
    WordsService.prototype.getWords = function () {
        return this.http.get('/api/words')
            .map(function (res) { return res.json(); });
    };
    WordsService.prototype.addWords = function (newWords) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/words', JSON.stringify(newWords), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    WordsService.prototype.deleteWords = function (id) {
        return this.http.delete('/api/words/' + id)
            .map(function (res) { return res.json(); });
    };
    WordsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WordsService);
    return WordsService;
}());
exports.WordsService = WordsService;
//# sourceMappingURL=words.service.js.map
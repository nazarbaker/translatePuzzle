import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class WordsService {
  constructor(private http: Http) {
    console.log('Words Service Initialized...');
  }

  getWords() {
    return this.http.get('/api/words')
      .map(res => res.json());
  }

  addWords(newWords) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/api/words', JSON.stringify(newWords), { headers: headers })
      .map(res => res.json());
  }

  deleteWords(id) {
    return this.http.delete('/api/words/' + id)
      .map(res => res.json());
  }
}

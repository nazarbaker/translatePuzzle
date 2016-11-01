import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()

export class WordsService{
  constructor(private http:Http){
    console.log('Words Service Initialized...');
  }

  getTasks(){
    return this.http.get('/api/words')
      .map(res => res.json());
  }
}

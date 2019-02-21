import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { WordFami, WordsFami } from '../models/word-fami';

@Injectable()
export class WordFamiService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByUserWord(userid: number, wordid: number): Observable<WordFami[]> {
    const url = `${this.baseUrl}WORDSFAMI?transform=1&filter[]=USERID,eq,${userid}&filter[]=WORDID,eq,${wordid}`;
    return this.http.get<WordsFami>(url)
      .pipe(
        map(result => result.WORDSFAMI.map(value => Object.assign(new WordFami(), value))),
      );
  }

  create(item: WordFami): Observable<number | any[]> {
    const url = `${this.baseUrl}WORDSFAMI`;
    return this.http.post<number | any[]>(url, item, this.httpOptions)
      .pipe(
      );
  }

  update(item: WordFami): Observable<number> {
    const url = `${this.baseUrl}WORDSFAMI/${item.ID}`;
    return this.http.put<number>(url, item, this.httpOptions).pipe(
    );
  }

  delete(id: number): Observable<number> {
    const url = `${this.baseUrl}WORDSFAMI/${id}`;

    return this.http.delete<number>(url, this.httpOptions).pipe(
    );
  }
}

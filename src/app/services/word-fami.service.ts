import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MWordFami, MWordsFami } from '../models/word-fami';

@Injectable()
export class WordFamiService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByUserWord(userid: number, wordid: number): Observable<MWordFami[]> {
    const url = `${this.baseUrlAPI}WORDSFAMI?filter=USERID,eq,${userid}&filter=WORDID,eq,${wordid}`;
    return this.http.get<MWordsFami>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MWordFami(), value))),
      );
  }

  create(item: MWordFami): Observable<number | any[]> {
    const url = `${this.baseUrlAPI}WORDSFAMI`;
    (item as any).ID = null;
    return this.http.post<number | any[]>(url, item, this.httpOptions)
      .pipe(
      );
  }

  update(item: MWordFami): Observable<number> {
    const url = `${this.baseUrlAPI}WORDSFAMI/${item.ID}`;
    return this.http.put<number>(url, item, this.httpOptions).pipe(
    );
  }

  delete(id: number): Observable<number> {
    const url = `${this.baseUrlAPI}WORDSFAMI/${id}`;

    return this.http.delete<number>(url, this.httpOptions).pipe(
    );
  }
}

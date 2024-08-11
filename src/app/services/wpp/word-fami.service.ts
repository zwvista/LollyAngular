import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../misc/base.service';
import { MWordFami, MWordsFami } from '../../models/wpp/word-fami';
import { GlobalVars } from '../../common/common';

@Injectable({providedIn: 'root'})
export class WordFamiService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByUserWord(wordid: number): Observable<MWordFami[]> {
    const url = `${this.baseUrlAPI}WORDSFAMI?filter=USERID,eq,${GlobalVars.userid}&filter=WORDID,eq,${wordid}`;
    return this.httpGet<MWordsFami>(url).pipe(
      map(result => result.records.map(value => Object.assign(new MWordFami(), value))),
    );
  }

  create(item: MWordFami): Observable<number | any[]> {
    const url = `${this.baseUrlAPI}WORDSFAMI`;
    (item as any).ID = null;
    return this.httpPost<number | any[]>(url, item).pipe(
    );
  }

  update(item: MWordFami): Observable<number> {
    const url = `${this.baseUrlAPI}WORDSFAMI/${item.ID}`;
    return this.httpPut<number>(url, item).pipe(
    );
  }

  delete(id: number): Observable<number> {
    const url = `${this.baseUrlAPI}WORDSFAMI/${id}`;

    return this.httpDelete(url).pipe(
    );
  }
}

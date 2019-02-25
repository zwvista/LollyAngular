import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TextbookWord, TextbookWords } from '../models/textbook-word';
import { partsFrom, unitsFrom } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class TextbookWordService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number, page: number, rows: number): Observable<TextbookWords> {
    const url = `${this.baseUrl}VTEXTBOOKWORDS?transform=1&filter=LANGID,eq,${langid}&order[]=TEXTBOOKID&order[]=UNIT&order[]=PART&order[]=SEQNUM&page=${page},${rows}`;
    return this.http.get<TextbookWords>(url)
      .pipe(
        map(result => ({
          VTEXTBOOKWORDS: result.VTEXTBOOKWORDS.map(value => {
            const v = Object.assign(new TextbookWord(), value);
            v.units = unitsFrom(v.UNITINFO);
            v.parts = partsFrom(v.PARTS);
            return v;
          }),
          _results: result._results,
        })),
      );
  }
}
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MTextbookWord, MTextbookWords } from '../models/textbook-word';
import { MTextbook } from '../models/textbook';

@Injectable({
  providedIn: 'root'
})
export class TextbookWordService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number, textbooks: MTextbook[], page: number, rows: number): Observable<MTextbookWords> {
    const url = `${this.baseUrl}VTEXTBOOKWORDS?transform=1&filter=LANGID,eq,${langid}&order[]=TEXTBOOKID&order[]=UNIT&order[]=PART&order[]=SEQNUM&page=${page},${rows}`;
    return this.http.get<MTextbookWords>(url)
      .pipe(
        map(result => ({
          VTEXTBOOKWORDS: result.VTEXTBOOKWORDS.map(value => {
            const v = Object.assign(new MTextbookWord(), value);
            const v2 = textbooks.find(o => o.ID === v.TEXTBOOKID);
            v.units = v2.units;
            v.parts = v2.parts;
            return v;
          }),
          _results: result._results,
        })),
      );
  }
}

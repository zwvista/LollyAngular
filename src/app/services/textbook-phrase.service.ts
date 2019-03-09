import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MTextbookPhrase, MTextbookPhrases } from '../models/textbook-phrase';
import { map } from 'rxjs/operators';
import { MTextbook } from '../models/textbook';

@Injectable({
  providedIn: 'root'
})
export class TextbookPhraseService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number, textbooks: MTextbook[], page: number, rows: number): Observable<MTextbookPhrases> {
    const url = `${this.baseUrl}VTEXTBOOKPHRASES?transform=1&filter=LANGID,eq,${langid}&order[]=TEXTBOOKID&order[]=UNIT&order[]=PART&order[]=SEQNUM&page=${page},${rows}`;
    return this.http.get<MTextbookPhrases>(url)
      .pipe(
        map(result => ({
          VTEXTBOOKPHRASES: result.VTEXTBOOKPHRASES.map(value => {
            const v = Object.assign(new MTextbookPhrase(), value);
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

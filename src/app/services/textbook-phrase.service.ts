import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TextbookPhrase, TextbookPhrases } from '../models/textbook-phrase';
import { map } from 'rxjs/operators';
import { partsFrom, unitsFrom } from '../common/common';

@Injectable({
  providedIn: 'root'
})
export class TextbookPhraseService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<TextbookPhrase[]> {
    const url = `${this.baseUrl}VTEXTBOOKPHRASES?transform=1&filter=LANGID,eq,${langid}&order[]=TEXTBOOKID&order[]=UNIT&order[]=PART&order[]=SEQNUM`;
    return this.http.get<TextbookPhrases>(url)
      .pipe(
        map(result => result.VTEXTBOOKPHRASES.map(value => {
          const v = Object.assign(new TextbookPhrase(), value);
          v.units = unitsFrom(v.UNITINFO);
          v.parts = partsFrom(v.PARTS);
          return v;
        })),
      );
  }
}

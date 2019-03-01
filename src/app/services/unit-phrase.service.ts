import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UnitPhrase, UnitPhrases } from '../models/unit-phrase';
import { BaseService } from './base.service';
import { partsFrom, unitsFrom } from '../common/common';

@Injectable()
export class UnitPhraseService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByTextbookUnitPart(textbookid: number, unitPartFrom: number, unitPartTo: number): Observable<UnitPhrase[]> {
    const url = `${this.baseUrl}VUNITPHRASES?transform=1&filter[]=TEXTBOOKID,eq,${textbookid}&filter[]=UNITPART,bt,${unitPartFrom},${unitPartTo}&order[]=UNITPART&order[]=SEQNUM`;
    return this.http.get<UnitPhrases>(url)
      .pipe(
        map(result => {
          const result2 = result.VUNITPHRASES.map(value => Object.assign(new UnitPhrase(), value));
          result2.forEach(o => {
            o.units = unitsFrom(o.UNITS);
            o.parts = partsFrom(o.PARTS);
          });
          return result2;
        }),
      );
  }

  getDataByLangPhrase(phraseid: number): Observable<UnitPhrase[]> {
    const url = `${this.baseUrl}VUNITPHRASES?transform=1&filter=PHRASEID,eq,${phraseid}`;
    return this.http.get<UnitPhrases>(url)
      .pipe(
        map(result => result.VUNITPHRASES.map(value => Object.assign(new UnitPhrase(), value))),
      );
  }

  create(item: UnitPhrase): Observable<number | any[]> {
    const url = `${this.baseUrl}UNITPHRASES`;
    return this.http.post<number | any[]>(url, item)
      .pipe(
      );
  }

  updateSeqNum(id: number, seqnum: number): Observable<number> {
    const url = `${this.baseUrl}UNITPHRASES/${id}`;
    return this.http.put<number>(url, {ID: id, SEQNUM: seqnum} as UnitPhrase, this.httpOptions).pipe(
    );
  }

  update(item: UnitPhrase): Observable<number> {
    const url = `${this.baseUrl}UNITPHRASES/${item.ID}`;
    return this.http.put<number>(url, item, this.httpOptions).pipe(
    );
  }

  delete(ID: number): Observable<number> {
    const url = `${this.baseUrl}UNITPHRASES/${ID}`;
    return this.http.delete<number>(url, this.httpOptions).pipe(
    );
  }

}

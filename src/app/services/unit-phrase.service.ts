import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { UnitPhrase, UnitPhrases } from '../models/unit-phrase';
import { BaseService } from './base.service';

@Injectable()
export class UnitPhraseService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByTextbookUnitPart(textbookid: number, unitPartFrom: number, unitPartTo: number): Observable<UnitPhrase[]> {
    const url = `${this.baseUrl}VUNITPHRASES?transform=1&filter[]=TEXTBOOKID,eq,${textbookid}&filter[]=UNITPART,bt,${unitPartFrom},${unitPartTo}&order[]=UNITPART&order[]=SEQNUM`;
    return this.http.get<UnitPhrases>(url)
      .pipe(
        map(result => result.VUNITPHRASES),
        tap(result => this.log(`fetched UnitPhrases`)),
        catchError(this.handleError('getDataByTextbook UnitPhrases', []))
      );
  }

  create(item: UnitPhrase): Observable<number | any[]> {
    const url = `${this.baseUrl}UNITPHRASES`;
    return this.http.post<number | any[]>(url, item)
      .pipe(
        tap(result => this.log(`created UnitPhrase id=${result}`)),
        catchError(this.handleError('create UnitPhrase', []))
      );
  }

  updateSeqNum(id: number, seqnum: number): Observable<number> {
    const url = `${this.baseUrl}UNITPHRASES/${id}`;
    return this.http.put<number>(url, {ID: id, SEQNUM: seqnum} as UnitPhrase, this.httpOptions).pipe(
      tap(_ => this.log(`updated UnitPhrase id=${id}`)),
      catchError(this.handleError<any>('update UnitPhrase'))
    );
  }

  update(item: UnitPhrase): Observable<number> {
    const url = `${this.baseUrl}UNITPHRASES/${item.ID}`;
    return this.http.put<number>(url, item, this.httpOptions).pipe(
      tap(_ => this.log(`updated UnitPhrase id=${item.ID}`)),
      catchError(this.handleError<any>('update UnitPhrase'))
    );
  }

  delete(ID: number): Observable<number> {
    const url = `${this.baseUrl}UNITPHRASES/${ID}`;
    return this.http.delete<number>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted UnitPhrase id=${ID}`)),
      catchError(this.handleError<any>('delete UnitPhrase'))
    );
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UnitWord, UnitWords } from '../models/unit-word';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { BaseService } from './base.service';

@Injectable()
export class UnitWordService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByTextbookUnitPart(textbookid: number, unitPartFrom: number, unitPartTo: number): Observable<UnitWord[]> {
    const url = `${this.baseUrl}VUNITWORDS?transform=1&filter[]=TEXTBOOKID,eq,${textbookid}&filter[]=UNITPART,bt,${unitPartFrom},${unitPartTo}&order[]=UNITPART&order[]=SEQNUM`;
    return this.http.get<UnitWords>(url)
      .pipe(
        map(result => result.VUNITWORDS.map(value => Object.assign(new UnitWord(), value))),
        tap(result => this.log(`fetched UnitWords`)),
        catchError(this.handleError('getDataByTextbook UnitWords', []))
      );
  }

  create(item: UnitWord): Observable<number | any[]> {
    const url = `${this.baseUrl}UNITWORDS`;
    return this.http.post<number | any[]>(url, item, this.httpOptions)
      .pipe(
        tap(result => this.log(`created UnitWord id=${result}`)),
        catchError(this.handleError('create UnitWord', []))
      );
  }

  updateSeqNum(id: number, seqnum: number): Observable<number> {
    const url = `${this.baseUrl}UNITWORDS/${id}`;
    return this.http.put<number>(url, {ID: id, SEQNUM: seqnum} as UnitWord, this.httpOptions).pipe(
      tap(_ => this.log(`updated UnitWord id=${id}`)),
      catchError(this.handleError<any>('update UnitWord'))
    );
  }

  updateNote(id: number, note: string): Observable<number> {
    const url = `${this.baseUrl}UNITWORDS/${id}`;
    return this.http.put<number>(url, {ID: id, NOTE: note} as UnitWord, this.httpOptions).pipe(
      tap(_ => this.log(`updated UnitWord id=${id}`)),
      catchError(this.handleError<any>('update UnitWord'))
    );
  }

  update(item: UnitWord): Observable<number> {
    const url = `${this.baseUrl}UNITWORDS/${item.ID}`;
    return this.http.put<number>(url, item, this.httpOptions).pipe(
      tap(_ => this.log(`updated UnitWord id=${item.ID}`)),
      catchError(this.handleError<any>('update UnitWord'))
    );
  }

  delete(id: number): Observable<number> {
    const url = `${this.baseUrl}UNITWORDS/${id}`;

    return this.http.delete<number>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted UnitWord id=${id}`)),
      catchError(this.handleError<any>('delete UnitWord'))
    );
  }

}

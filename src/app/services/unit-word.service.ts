import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {UnitWord, UnitWords} from '../models/unit-word';
import { Observable } from 'rxjs/Observable';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import {BaseService} from './base.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UnitWordService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByTextbookUnitPart(textbookid: number, unitPartFrom: number, unitPartTo: number): Observable<UnitWords> {
    const url = `${this.baseUrl}VUNITWORDS?transform=1&filter[]=TEXTBOOKID,eq,${textbookid}&filter[]=UNITPART,bt,${unitPartFrom},${unitPartTo}&order[]=UNITPART&order[]=SEQNUM`;
    return this.http.get<UnitWords>(url)
      .pipe(
        tap(result => this.log(`fetched UnitWords`)),
        catchError(this.handleError('getDataByTextbook UnitWords', []))
      );
  }

  create(item: UnitWord): Observable<number | any[]> {
    const url = `${this.baseUrl}UNITWORDS`;
    return this.http.get<number | any[]>(url)
      .pipe(
        tap(result => this.log(`created UnitWord id=${result}`)),
        catchError(this.handleError('create UnitWord', []))
      );
  }

  updateSeqNum(id: number, seqnum: number): Observable<boolean> {
    const url = `${this.baseUrl}UNITWORDS/${id}`;
    return this.http.put(url, {ID: id, SEQNUM: seqnum} as UnitWord, httpOptions).pipe(
      tap(_ => this.log(`updated UnitWord id=${id}`)),
      catchError(this.handleError<any>('update UnitWord'))
    );
  }

  updateNote(id: number, note: string): Observable<boolean> {
    const url = `${this.baseUrl}UNITWORDS/${id}`;
    return this.http.put(url, {ID: id, NOTE: note} as UnitWord, httpOptions).pipe(
      tap(_ => this.log(`updated UnitWord id=${id}`)),
      catchError(this.handleError<any>('update UnitWord'))
    );
  }

  update(item: UnitWord): Observable<boolean> {
    const url = `${this.baseUrl}UNITWORDS/${item.ID}`;
    return this.http.put(url, item, httpOptions).pipe(
      tap(_ => this.log(`updated UnitWord id=${item.ID}`)),
      catchError(this.handleError<any>('update UnitWord'))
    );
  }

  delete(ID: number): Observable<boolean> {
    const url = `${this.baseUrl}UNITWORDS/${ID}`;

    return this.http.delete<boolean>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted UnitWord id=${ID}`)),
      catchError(this.handleError<any>('delete UnitWord'))
    );
  }

}

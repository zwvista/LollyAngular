import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UnitWord } from '../models/unit-word';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
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

  getDataByTextbookUnitPart(textbookid: number, unitPartFrom: number, unitPartTo: number): Observable<UnitWord[]> {
    const url = `${this.baseUrl}VUNITWORDS?transform=1&filter[]=TEXTBOOKID,eq,${textbookid}&filter[]=UNITPART,bt,${unitPartFrom},${unitPartTo}&order[]=UNITPART&order[]=SEQNUM`;
    return this.http.get<UnitWord[]>(url)
      .pipe(
        tap(result => this.log(`fetched unitWords`)),
        catchError(this.handleError('getDataByTextbook unitWord', []))
      );
  }

  create(item: UnitWord): Observable<number> {
    const url = `${this.baseUrl}VUNITWORDS`;
    return this.http.get<number>(url)
      .pipe(
        tap(result => this.log(`created unitWord id=${result}`)),
        catchError(this.handleError('create unitWord', []))
      );
  }

  updateSeqNum(ID: number, SEQNUM: number): Observable<boolean> {
    const url = `${this.baseUrl}VUNITWORDS/${ID}`;
    return this.http.put(url, {ID, SEQNUM} as UnitWord, httpOptions).pipe(
      tap(_ => this.log(`updated unitWord id=${ID}`)),
      catchError(this.handleError<any>('update unitWord'))
    );
  }

  updateNote(ID: number, NOTE: string): Observable<boolean> {
    const url = `${this.baseUrl}VUNITWORDS/${ID}`;
    return this.http.put(url, {ID, NOTE} as UnitWord, httpOptions).pipe(
      tap(_ => this.log(`updated unitWord id=${ID}`)),
      catchError(this.handleError<any>('update unitWord'))
    );
  }

  update(item: UnitWord): Observable<boolean> {
    const url = `${this.baseUrl}VUNITWORDS/${item.ID}`;
    return this.http.put(url, item, httpOptions).pipe(
      tap(_ => this.log(`updated unitWord id=${item.ID}`)),
      catchError(this.handleError<any>('update unitWord'))
    );
  }

  delete(ID: number): Observable<boolean> {
    const url = `${this.baseUrl}VUNITWORDS/${ID}`;

    return this.http.delete<boolean>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted unitWord id=${ID}`)),
      catchError(this.handleError<any>('delete unitWord'))
    );
  }

}

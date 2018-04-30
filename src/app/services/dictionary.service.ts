import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {BaseService} from './base.service';
import {DictsNote, DictsOffline, DictsOnline} from '../models/dictionary';

@Injectable()
export class DictOnlineService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByLang(langid: number): Observable<DictsOnline[]> {
    const url = `${this.baseUrl}VDICTSONLINE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictsOnline[]>(url)
      .pipe(
        tap(result => this.log(`fetched DictsOnline`)),
        catchError(this.handleError('getDataByLang DictsOnline', []))
      );
  }

}

@Injectable()
export class DictOfflineService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByLang(langid: number): Observable<DictsOffline[]> {
    const url = `${this.baseUrl}VDICTSOFFLINE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictsOffline[]>(url)
      .pipe(
        tap(result => this.log(`fetched DictsOffline`)),
        catchError(this.handleError('getDataByLang DictsOffline', []))
      );
  }

}

@Injectable()
export class DictNoteService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByLang(langid: number): Observable<DictsNote[]> {
    const url = `${this.baseUrl}VDICTSNOTE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictsNote[]>(url)
      .pipe(
        tap(result => this.log(`fetched DictsNote`)),
        catchError(this.handleError('getDataByLang DictsNote', []))
      );
  }

}

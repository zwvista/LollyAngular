import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {BaseService} from './base.service';
import {DictNote, DictOffline, DictOnline} from '../models/dictionary';

@Injectable()
export class DictOnlineService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByLang(langid: number): Observable<DictOnline[]> {
    const url = `${this.baseUrl}VDICTSONLINE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictOnline[]>(url)
      .pipe(
        tap(result => this.log(`fetched DictOnline`)),
        catchError(this.handleError('getDataByLang DictOnline', []))
      );
  }

}

@Injectable()
export class DictOfflineService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByLang(langid: number): Observable<DictOffline[]> {
    const url = `${this.baseUrl}VDICTSONLINE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictOffline[]>(url)
      .pipe(
        tap(result => this.log(`fetched DictOffline`)),
        catchError(this.handleError('getDataByLang DictOffline', []))
      );
  }

}

@Injectable()
export class DictNoteService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByLang(langid: number): Observable<DictNote[]> {
    const url = `${this.baseUrl}VDICTSNOTE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictNote[]>(url)
      .pipe(
        tap(result => this.log(`fetched DictNote`)),
        catchError(this.handleError('getDataByLang DictNote', []))
      );
  }

}

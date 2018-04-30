import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserSetting, UserSettings} from '../models/user-setting';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserSettingService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByUser(userid: number): Observable<UserSettings | any[]> {
    const url = `${this.baseUrl}USERSETTINGS?transform=1&filter=USERID,eq,${userid}`;
    return this.http.get<UserSettings | any[]>(url)
      .pipe(
        tap(result => this.log(`fetched UserSettings`)),
        catchError(this.handleError('getDataByUser UserSettings', []))
      );
  }

  updateLang(id: number, langid: number): Observable<boolean> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put(url, {VALUE1: langid} as UserSetting, httpOptions).pipe(
      tap(_ => this.log(`updated UserSetting id=${id}`)),
      catchError(this.handleError<any>('updateLang UserSetting'))
    );
  }

  updateTextbook(id: number, textbookid: number): Observable<boolean> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put(url, {VALUE1: textbookid} as UserSetting, httpOptions).pipe(
      tap(_ => this.log(`updated UserSetting id=${id}`)),
      catchError(this.handleError<any>('updateTextbook UserSetting'))
    );
  }

  updateDict(id: number, dictid: number): Observable<boolean> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put(url, {VALUE2: dictid} as UserSetting, httpOptions).pipe(
      tap(_ => this.log(`updated UserSetting id=${id}`)),
      catchError(this.handleError<any>('updateDict UserSetting'))
    );
  }

  updateUnitFrom(id: number, unitfrom: number): Observable<boolean> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put(url, {VALUE1: unitfrom} as UserSetting, httpOptions).pipe(
      tap(_ => this.log(`updated UserSetting id=${id}`)),
      catchError(this.handleError<any>('updateUnitFrom UserSetting'))
    );
  }

  updatePartFrom(id: number, partfrom: number): Observable<boolean> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put(url, {VALUE2: partfrom} as UserSetting, httpOptions).pipe(
      tap(_ => this.log(`updated UserSetting id=${id}`)),
      catchError(this.handleError<any>('updatePartFrom UserSetting'))
    );
  }

  updateUnitTo(id: number, unitto: number): Observable<boolean> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put(url, {VALUE3: unitto} as UserSetting, httpOptions).pipe(
      tap(_ => this.log(`updated UserSetting id=${id}`)),
      catchError(this.handleError<any>('updateUnitTo UserSetting'))
    );
  }

  updatePartTo(id: number, partto: number): Observable<boolean> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put(url, {VALUE4: partto} as UserSetting, httpOptions).pipe(
      tap(_ => this.log(`updated UserSetting id=${id}`)),
      catchError(this.handleError<any>('updatePartTo UserSetting'))
    );
  }
}

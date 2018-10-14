import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserSetting, UserSettings } from '../models/user-setting';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserSettingService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByUser(userid: number): Observable<UserSetting[]> {
    const url = `${this.baseUrl}USERSETTINGS?transform=1&filter=USERID,eq,${userid}`;
    return this.http.get<UserSettings>(url)
      .pipe(
        map(result => result.USERSETTINGS.map(value => Object.assign(new UserSetting(), value))),
      );
  }

  updateLang(id: number, langid: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE1: langid} as UserSetting, httpOptions).pipe(
    );
  }

  updateTextbook(id: number, textbookid: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE1: textbookid} as UserSetting, httpOptions).pipe(
    );
  }

  updateDictOnline(id: number, dictonlineid: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE2: dictonlineid} as UserSetting, httpOptions).pipe(
    );
  }

  updateDictNote(id: number, dictnoteid: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE3: dictnoteid} as UserSetting, httpOptions).pipe(
    );
  }

  updateUnitFrom(id: number, unitfrom: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE1: unitfrom} as UserSetting, httpOptions).pipe(
    );
  }

  updatePartFrom(id: number, partfrom: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE2: partfrom} as UserSetting, httpOptions).pipe(
    );
  }

  updateUnitTo(id: number, unitto: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE3: unitto} as UserSetting, httpOptions).pipe(
    );
  }

  updatePartTo(id: number, partto: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE4: partto} as UserSetting, httpOptions).pipe(
    );
  }
}

import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MUserSetting, MUserSettings } from '../models/user-setting';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserSettingService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByUser(userid: number): Observable<MUserSetting[]> {
    const url = `${this.baseUrl}USERSETTINGS?transform=1&filter=USERID,eq,${userid}`;
    return this.http.get<MUserSettings>(url)
      .pipe(
        map(result => result.USERSETTINGS.map(value => Object.assign(new MUserSetting(), value))),
      );
  }

  updateLang(id: number, langid: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE1: String(langid)} as MUserSetting, httpOptions).pipe(
    );
  }

  updateTextbook(id: number, textbookid: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE1: String(textbookid)} as MUserSetting, httpOptions).pipe(
    );
  }

  updateDictItem(id: number, dictitem: string): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE2: dictitem} as MUserSetting, httpOptions).pipe(
    );
  }

  updateDictNote(id: number, dictnoteid: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE3: String(dictnoteid)} as MUserSetting, httpOptions).pipe(
    );
  }

  updateUnitFrom(id: number, unitfrom: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE1: String(unitfrom)} as MUserSetting, httpOptions).pipe(
    );
  }

  updatePartFrom(id: number, partfrom: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE2: String(partfrom)} as MUserSetting, httpOptions).pipe(
    );
  }

  updateUnitTo(id: number, unitto: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE3: String(unitto)} as MUserSetting, httpOptions).pipe(
    );
  }

  updatePartTo(id: number, partto: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE4: String(partto)} as MUserSetting, httpOptions).pipe(
    );
  }

  updateVoice(id: number, voiceid: number): Observable<number> {
    const url = `${this.baseUrl}USERSETTINGS/${id}`;
    return this.http.put<number>(url, {VALUE1: String(voiceid)} as MUserSetting).pipe(
    );
  }
}

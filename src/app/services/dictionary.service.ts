import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { DictNote, DictOffline, DictOnline, DictsNote, DictsOffline, DictsOnline } from '../models/dictionary';

@Injectable()
export class DictOnlineService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<DictOnline[]> {
    const url = `${this.baseUrl}VDICTSONLINE?transform=1&filter[]=LANGIDFROM,eq,${langid}&filter[]=DICTTYPEID,ne,2`;
    return this.http.get<DictsOnline>(url)
      .pipe(
        map(result => result.VDICTSONLINE.map(value => Object.assign(new DictOnline(), value))),
      );
  }

}

@Injectable()
export class DictOfflineService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<DictOffline[]> {
    const url = `${this.baseUrl}VDICTSOFFLINE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictsOffline>(url)
      .pipe(
        map(result => result.VDICTSOFFLINE.map(value => Object.assign(new DictOffline(), value))),
      );
  }

}

@Injectable()
export class DictNoteService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<DictNote[]> {
    const url = `${this.baseUrl}VDICTSNOTE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictsNote>(url)
      .pipe(
        map(result => result.VDICTSNOTE.map(value => Object.assign(new DictNote(), value))),
      );
  }

}

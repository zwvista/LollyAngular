import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { DictNote, DictWord, DictsNote, DictsWord } from '../models/dictionary';

@Injectable()
export class DictWordService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<DictWord[]> {
    const url = `${this.baseUrl}VDICTSWORD?transform=1&filter[]=LANGIDFROM,eq,${langid}`;
    return this.http.get<DictsWord>(url)
      .pipe(
        map(result => result.VDICTSWORD.map(value => Object.assign(new DictWord(), value))),
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

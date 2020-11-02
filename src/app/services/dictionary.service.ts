import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MDictionary, MDictionaries } from '../models/dictionary';

@Injectable()
export class DictionaryService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDictsReference(langid: number): Observable<MDictionary[]> {
    const url = `${this.baseUrlAPI}VDICTSREFERENCE?filter=LANGIDFROM,eq,${langid}&order=SEQNUM&order=DICTNAME`;
    return this.http.get<MDictionaries>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MDictionary(), value))),
      );
  }

  getDictsNote(langid: number): Observable<MDictionary[]> {
    const url = `${this.baseUrlAPI}VDICTSNOTE?filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<MDictionaries>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MDictionary(), value))),
      );
  }

  getDictsTranslation(langid: number): Observable<MDictionary[]> {
    const url = `${this.baseUrlAPI}VDICTSTRANSLATION?filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<MDictionaries>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MDictionary(), value))),
      );
  }

}

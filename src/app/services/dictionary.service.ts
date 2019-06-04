import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MDictReference, MDictNote, MDictsReference, MDictsNote, MDictTranslation, MDictsTranslation } from '../models/dictionary';

@Injectable()
export class DictReferenceService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<MDictReference[]> {
    const url = `${this.baseUrl}VDICTSREFERENCE?filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<MDictsReference>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MDictReference(), value))),
      );
  }

}

@Injectable()
export class DictNoteService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<MDictNote[]> {
    const url = `${this.baseUrl}VDICTSNOTE?filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<MDictsNote>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MDictNote(), value))),
      );
  }

}

@Injectable()
export class DictTranslationService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<MDictTranslation[]> {
    const url = `${this.baseUrl}VDICTSTRANSLATION?filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<MDictsTranslation>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MDictTranslation(), value))),
      );
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { MDictMean, MDictNote, MDictsMean, MDictsNote } from '../models/dictionary';

@Injectable()
export class DictMeanService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<MDictMean[]> {
    const url = `${this.baseUrl}VDICTSMEAN?transform=1&filter[]=LANGIDFROM,eq,${langid}`;
    return this.http.get<MDictsMean>(url)
      .pipe(
        map(result => result.VDICTSMEAN.map(value => Object.assign(new MDictMean(), value))),
      );
  }

}

@Injectable()
export class DictNoteService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<MDictNote[]> {
    const url = `${this.baseUrl}VDICTSNOTE?transform=1&filter=LANGIDFROM,eq,${langid}`;
    return this.http.get<MDictsNote>(url)
      .pipe(
        map(result => result.VDICTSNOTE.map(value => Object.assign(new MDictNote(), value))),
      );
  }

}

import { Injectable } from '@angular/core';
import { BaseService } from '../misc/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MPatternWebPage, MPatternWebPages } from '../../models/wpp/pattern-webpage';

@Injectable()
export class PatternWebpageService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByPattern(patternid: number): Observable<MPatternWebPage[]> {
    const url = `${this.baseUrlAPI}VPATTERNSWEBPAGES?PATTERNID=ID,eq,${patternid}&order=SEQNUM`;
    return this.httpGet<MPatternWebPages>(url).pipe(
      map(result => result.records.map(value => Object.assign(new MPatternWebPage(), value))),
    );
  }

  getDataById(id: number): Observable<MPatternWebPage[]> {
    const url = `${this.baseUrlAPI}VPATTERNSWEBPAGES?filter=ID,eq,${id}`;
    return this.httpGet<MPatternWebPages>(url).pipe(
      map(result => result.records.map(value => Object.assign(new MPatternWebPage(), value))),
    );
  }

  create(item: MPatternWebPage): Observable<number | any[]> {
    const url = `${this.baseUrlAPI}PATTERNSWEBPAGES`;
    (item as any).ID = null;
    return this.httpPost<number | any[]>(url, item).pipe(
    );
  }

  updateSeqNum(id: number, seqnum: number): Observable<number> {
    const url = `${this.baseUrlAPI}PATTERNSWEBPAGES/${id}`;
    return this.httpPut<number>(url, {ID: id, SEQNUM: seqnum} as MPatternWebPage).pipe(
    );
  }

  update(item: MPatternWebPage): Observable<number> {
    const url = `${this.baseUrlAPI}PATTERNSWEBPAGES/${item.ID}`;
    return this.httpPut<number>(url, item).pipe(
    );
  }

  delete(id: number): Observable<number> {
    const url = `${this.baseUrlAPI}PATTERNSWEBPAGES/${id}`;
    return this.httpDelete(url).pipe(
    );
  }
}

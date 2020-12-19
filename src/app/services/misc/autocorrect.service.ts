import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MAutoCorrect, MAutoCorrects } from '../../models/misc/autocorrect';

@Injectable({
  providedIn: 'root'
})
export class AutoCorrectService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<MAutoCorrect[]> {
    const url = `${this.baseUrlAPI}AUTOCORRECT?filter=LANGID,eq,${langid}`;
    return this.http.get<MAutoCorrects>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MAutoCorrect(), value))),
      );
  }
}

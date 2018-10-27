import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AutoCorrect, AutoCorrects } from '../models/autocorrect';

@Injectable({
  providedIn: 'root'
})
export class AutoCorrectService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<AutoCorrect[]> {
    const url = `${this.baseUrl}AUTOCORRECT?transform=1&filter=LANGID,eq,${langid}`;
    return this.http.get<AutoCorrects>(url)
      .pipe(
        map(result => result.AUTOCORRECT.map(value => Object.assign(new AutoCorrect(), value))),
      );
  }
}

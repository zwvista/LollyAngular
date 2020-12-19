import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MLanguage, MLanguages } from '../models/misc/language';

@Injectable()
export class LanguageService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getData(): Observable<MLanguage[]> {
    const url = `${this.baseUrlAPI}LANGUAGES?filter=ID,neq,0`;
    return this.http.get<MLanguages>(url)
      .pipe(
        // https://stackoverflow.com/questions/5873624/parse-json-string-into-a-particular-object-prototype-in-javascript
        map(result => result.records.map(value => Object.assign(new MLanguage(), value))),
      );
  }
}

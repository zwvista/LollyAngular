import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Language, Languages } from '../models/language';

@Injectable()
export class LanguageService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getData(): Observable<Language[]> {
    const url = `${this.baseUrl}LANGUAGES?transform=1&filter=ID,neq,0`;
    return this.http.get<Languages>(url)
      .pipe(
        // https://stackoverflow.com/questions/5873624/parse-json-string-into-a-particular-object-prototype-in-javascript
        map(result => result.LANGUAGES.map(value => Object.assign(new Language(), value))),
        tap(result => this.log(`fetched Languages`)),
        catchError(this.handleError('getData Languages', []))
      );
  }
}

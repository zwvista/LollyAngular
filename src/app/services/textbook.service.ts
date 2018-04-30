import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';
import {BaseService} from './base.service';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {Textbook} from '../models/textbook';

@Injectable()
export class TextbookService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getDataByLang(langid: number): Observable<Textbook[]> {
    const url = `${this.baseUrl}TEXTBOOKS?transform=1&filter=LANGID,eq,${langid}`;
    return this.http.get<Textbook[]>(url)
      .pipe(
        tap(result => this.log(`fetched Textbooks`)),
        catchError(this.handleError('getDataByLang Textbooks', []))
      );
  }

}
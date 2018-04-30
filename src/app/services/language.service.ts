import { Injectable } from '@angular/core';
import {MessageService} from './message.service';
import {HttpClient} from '@angular/common/http';
import {BaseService} from './base.service';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {Language, Languages} from '../models/language';

@Injectable()
export class LanguageService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  getData(): Observable<Languages | any[]> {
    const url = `${this.baseUrl}LANGUAGES?transform=1&filter=ID,neq,0`;
    return this.http.get<Languages | any[]>(url)
      .pipe(
        tap(result => this.log(`fetched Languages`)),
        catchError(this.handleError('getData Languages', []))
      );
  }
}

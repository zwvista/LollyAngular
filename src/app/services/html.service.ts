import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable } from 'rxjs/Observable';
import { UserSetting } from '../models/user-setting';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class HtmlService extends BaseService {

  constructor(
    http: HttpClient,
    messageService: MessageService)  { super(http, messageService); }

  static extractTextFrom(html: string, transform: string, template: string,
                         templateHandler: (text: string, template: string) => string): string {
    const dic = new Map([['<delete>', ''], ['\\t', '\t'], ['\\r', '\r'], ['\\n', '\n']]);

    let text = '';
    do {
      if (!transform) break;
      const arr = transform.split('\r\n');
      let regex = new RegExp(arr[0]);
      const m = regex.exec(html);
      if (!m) break;
      text = m[0];

      const f = (replacer: string) => {
        dic.forEach((value, key) => replacer = replacer.replace(key, value));
        text = text.replace(regex, replacer);
      };

      f(arr[1]);
      for (let i = 2; i < arr.length; i++)
        if (i % 2 === 0)
          regex = new RegExp(arr[i]);
        else
          f(arr[i]);

      if (!template) break;
      text = templateHandler(text, template);

    } while (false);
    return text;
  }

  getHtml(url: string): Observable<string> {
    return this.http.get<string>(url).pipe(
      tap(_ => this.log(`get html`)),
      catchError(this.handleError<any>('get html'))
    );
  }

}

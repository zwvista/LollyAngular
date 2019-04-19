import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HtmlService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  static extractTextFrom(html: string, transform: string, template: string,
                         templateHandler: (text: string, template: string) => string): string {
    const dic = new Map([['<delete>', ''], ['\\t', '\t'], ['\\r', '\r'], ['\\n', '\n']]);

    let text = html;
    do {
      if (transform.length === 0) break;
      const arr = transform.split('\r\n');
      if (arr.length % 2 === 1) arr.pop();

      for (let i = 0; i < arr.length; i++) {
        const regex = new RegExp(arr[i], 'g');
        let replacer = arr[i + 1];
        if (replacer.startsWith('<extract>')) {
          replacer = replacer.substring('<extract>'.length);
          const ms = regex.exec(html)!;
          text = ms.reduce((acc, s) => acc + s, '');
          if (text.length === 0) break;
        }
        dic.forEach((value, key) => replacer = replacer.replace(key, value));
        text = text.replace(regex, replacer);
      }

      if (template.length === 0) break;
      text = templateHandler(text, template);

    } while (false);
    return text;
  }

  getHtml(url: string): Observable<string> {
    // https://www.concretepage.com/angular-2/angular-httpclient-get-example#Text
    return this.http.get(url, {responseType: 'text'}).pipe(
    );
  }

}

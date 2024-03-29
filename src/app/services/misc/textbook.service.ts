import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MTextbook, MTextbooks } from '../../models/misc/textbook';
import { MSelectItem } from '../../common/selectitem';

@Injectable()
export class TextbookService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number): Observable<MTextbook[]> {
    const url = `${this.baseUrlAPI}TEXTBOOKS?filter=LANGID,eq,${langid}`;
    const f = (UNITS: string) => {
      let m = /UNITS,(\d+)/g.exec(UNITS);
      if (m) {
        const units = +m[1];
        return Array.from(Array(units).keys()).map(value => String(value + 1));
      }
      m = /PAGES,(\d+),(\d+)/g.exec(UNITS);
      if (m) {
        const n1 = +m[1];
        const n2 = +m[2];
        // https://stackoverflow.com/questions/4228356/integer-division-with-remainder-in-javascript
        const units = (n1 + n2 - 1) / n2 >> 0;
        return Array.from(Array(units).keys()).map(value => `${value * n2 + 1}~${value * n2 + n2}`);
      }
      m = /CUSTOM,(.+)/g.exec(UNITS);
      if (m)
        return m[1].split(',');
      return [];
    };
    return this.httpGet<MTextbooks>(url).pipe(
      map(result => result.records.map(value => {
          const o = Object.assign(new MTextbook(), value);
          o.units = f(o.UNITS).map((v, i) => new MSelectItem(i + 1, v));
          o.parts = o.PARTS.split(',').map((v, i) => new MSelectItem(i + 1, v));
          return o;
        })
      ),
    );
  }

}

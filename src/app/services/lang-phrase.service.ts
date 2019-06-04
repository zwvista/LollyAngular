import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MLangPhrase, MLangPhrases } from '../models/lang-phrase';
import { map } from 'rxjs/operators';

@Injectable()
export class LangPhraseService extends BaseService {

  constructor(http: HttpClient)  {
    super(http);
  }

  getDataByLang(langid: number, page: number, rows: number): Observable<MLangPhrases> {
    const url = `${this.baseUrl}LANGPHRASES?filter=LANGID,eq,${langid}&order=PHRASE&page=${page},${rows}`;
    return this.http.get<MLangPhrases>(url)
      .pipe(
        map(result => ({
          records: result.records.map(value => Object.assign(new MLangPhrase(), value)),
          _results: result._results,
        })),
      );
  }

  getDataByLangPhrase(langid: number, phrase: string): Observable<MLangPhrase[]> {
    const url = `${this.baseUrl}LANGPHRASES?filter=LANGID,eq,${langid}&filter=PHRASE,eq,${encodeURIComponent(phrase)}`;
    return this.http.get<MLangPhrases>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MLangPhrase(), value))
          // Api is case insensitive
            .filter(value => value.PHRASE === phrase)
        ),
      );
  }

  getDataById(id: number): Observable<MLangPhrase[]> {
    const url = `${this.baseUrl}LANGPHRASES?filter=ID,eq,${id}`;
    return this.http.get<MLangPhrases>(url)
      .pipe(
        map(result => result.records.map(value => Object.assign(new MLangPhrase(), value))),
      );
  }

  create(item: MLangPhrase): Observable<number | any[]> {
    const url = `${this.baseUrl}LANGPHRASES`;
    return this.http.post<number | any[]>(url, item)
      .pipe(
      );
  }

  update(item: MLangPhrase): Observable<number> {
    const url = `${this.baseUrl}LANGPHRASES/${item.ID}`;
    return this.http.put<number>(url, item, this.httpOptions).pipe(
    );
  }

  updateTranslation(id: number, translation: string): Observable<number> {
    const url = `${this.baseUrl}LANGPHRASES/${id}`;
    return this.http.put<number>(url, {ID: id, TRANSLATION: translation} as MLangPhrase, this.httpOptions).pipe(
    );
  }

  delete(ID: number): Observable<number> {
    const url = `${this.baseUrl}LANGPHRASES/${ID}`;
    return this.http.delete<number>(url, this.httpOptions).pipe(
    );
  }
}

import { Injectable } from '@angular/core';
import { LangPhraseService } from '../services/lang-phrase.service';
import { SettingsService } from './settings.service';
import { AppService } from './app.service';
import { concatMap, map } from 'rxjs/operators';
import { MLangPhrase } from '../models/lang-phrase';
import { Observable } from 'rxjs';

@Injectable()
export class PhrasesLangService {

  langPhrases: MLangPhrase[] = [];
  langPhraseCount = 0;

  constructor(private langPhraseService: LangPhraseService,
              private settingsService: SettingsService,
              private appService: AppService) {
  }

  getData(page: number, rows: number, filter: string, filterType: number) {
    return this.appService.initializeObject.pipe(
      concatMap(_ => this.langPhraseService.getDataByLang(this.settingsService.selectedLang.ID, page, rows, filter, filterType)),
      map(res => {
        this.langPhrases = res.records;
        this.langPhraseCount = res.results;
      }),
    );
  }

  create(item: MLangPhrase): Observable<number | any[]> {
    return this.langPhraseService.create(item);
  }

  update(item: MLangPhrase): Observable<number> {
    return this.langPhraseService.update(item);
  }

  delete(id: number): Observable<number> {
    return this.langPhraseService.delete(id);
  }

  newLangPhrase(): MLangPhrase {
    const o = new MLangPhrase();
    o.LANGID = this.settingsService.selectedLang.ID;
    return o;
  }
}

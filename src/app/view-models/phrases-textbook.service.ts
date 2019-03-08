import { Injectable } from '@angular/core';
import { LangPhraseService } from '../services/lang-phrase.service';
import { SettingsService } from './settings.service';
import { AppService } from './app.service';
import { TextbookPhrase } from '../models/textbook-phrase';
import { TextbookPhraseService } from '../services/textbook-phrase.service';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class PhrasesTextbookService {

  textbookPhrases: TextbookPhrase[] = [];
  textbookPhraseCount = 0;

  constructor(private textbookPhraseService: TextbookPhraseService,
              private langPhraseService: LangPhraseService,
              private settingsService: SettingsService,
              private appService: AppService) {
  }

  getData(page: number, rows: number) {
    return this.appService.initializeComplete.pipe(
      concatMap(_ => this.textbookPhraseService.getDataByLang(this.settingsService.selectedLang.ID,
        this.settingsService.textbooks, page, rows)),
      map(res => {
        this.textbookPhrases = res.VTEXTBOOKPHRASES;
        this.textbookPhraseCount = res._results;
      }),
    );
  }
}

import { Injectable } from '@angular/core';
import { LangPhraseService } from '../services/lang-phrase.service';
import { SettingsService } from './settings.service';
import { AppService } from './app.service';
import { concatMap, map } from 'rxjs/operators';
import { MUnitPhrase } from '../models/unit-phrase';
import { UnitPhraseService } from '../services/unit-phrase.service';

@Injectable()
export class PhrasesTextbookService {

  textbookPhrases: MUnitPhrase[] = [];
  textbookPhraseCount = 0;

  constructor(private unitPhraseService: UnitPhraseService,
              private langPhraseService: LangPhraseService,
              private settingsService: SettingsService,
              private appService: AppService) {
  }

  getData(page: number, rows: number) {
    return this.appService.initializeComplete.pipe(
      concatMap(_ => this.unitPhraseService.getDataByLang(this.settingsService.selectedLang.ID,
        this.settingsService.textbooks, page, rows)),
      map(res => {
        this.textbookPhrases = res.VUNITPHRASES;
        this.textbookPhraseCount = res._results;
      }),
    );
  }
}

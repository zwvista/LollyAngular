import { Injectable } from '@angular/core';
import { AppService } from './app.service';
import { SettingsService } from './settings.service';
import { UnitPhrase } from '../models/unit-phrase';
import { UnitPhraseService } from '../services/unit-phrase.service';

@Injectable()
export class PhrasesUnitService {

  unitPhrases: UnitPhrase[] = new Array(0);

  constructor(private unitPhraseService: UnitPhraseService,
              private settingsService: SettingsService,
              private appService: AppService) {
    appService.initializeComplete.subscribe(_ => this.getData());
  }

  getData() {
    if (this.appService.isInitialized) {
      this.unitPhraseService.getDataByTextbookUnitPart(this.settingsService.USTEXTBOOKID,
        this.settingsService.USUNITPARTFROM, this.settingsService.USUNITPARTTO)
        .subscribe(res => this.unitPhrases = res);
    }
  }

}

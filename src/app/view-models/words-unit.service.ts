import { Injectable } from '@angular/core';
import { UnitWordService } from '../services/unit-word.service';
import { SettingsService } from './settings.service';
import { UnitWord } from '../models/unit-word';
import { AppService } from './app.service';

@Injectable()
export class WordsUnitService {

  unitWords: UnitWord[] = new Array(0);

  constructor(private unitWordService: UnitWordService,
              private settingsService: SettingsService,
              private appService: AppService) {
    appService.initializeComplete.subscribe(_ => this.getData());
  }

  getData() {
    if (this.appService.isInitialized) {
      this.unitWordService.getDataByTextbookUnitPart(this.settingsService.USTEXTBOOKID,
        this.settingsService.USUNITPARTFROM, this.settingsService.USUNITPARTTO)
        .subscribe(res => this.unitWords = res);
    }
  }

}

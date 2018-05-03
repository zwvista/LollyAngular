import { Injectable } from '@angular/core';
import { UnitWordService } from '../services/unit-word.service';
import { SettingsService } from './settings.service';
import { UnitWord } from '../models/unit-word';

@Injectable()
export class WordsUnitService {

  unitWords: UnitWord[] = new Array(0);

  constructor(private unitWordService: UnitWordService,
              private settingsService: SettingsService) {
    this.settingsService.getDataComplete.subscribe(_ => {
      this.unitWordService.getDataByTextbookUnitPart(this.settingsService.USTEXTBOOKID,
        this.settingsService.USUNITPARTFROM, this.settingsService.USUNITPARTTO)
        .subscribe(res => this.unitWords = res);
    });
  }

}

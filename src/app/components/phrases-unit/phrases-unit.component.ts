import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { googleString } from '../../common/common';
import { SettingsService } from '../../view-models/settings.service';
import { MUnitPhrase } from '../../models/wpp/unit-phrase';
import { AppService } from '../../view-models/app.service';

@Component({
  selector: 'app-phrases-unit',
  templateUrl: './phrases-unit.component.html',
  styleUrls: ['./phrases-unit.component.css', '../../common/common.css']
})
export class PhrasesUnitComponent implements OnInit {

  constructor(private appService: AppService,
              public phrasesUnitService: PhrasesUnitService,
              public settingsService: SettingsService) { }

  filter: string;
  filterType = 0;

  ngOnInit() {
    this.appService.initializeObject.subscribe(_ => {
      this.onRefresh();
    });
  }

  onReorder(from: number, to: number) {
    console.log(`${from},${to}`);
    this.phrasesUnitService.reindex(index => {});
  }

  onRefresh() {
    this.phrasesUnitService.getDataInTextbook(this.filter, this.filterType).subscribe();
  }

  deletePhrase(item: MUnitPhrase) {
    this.phrasesUnitService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

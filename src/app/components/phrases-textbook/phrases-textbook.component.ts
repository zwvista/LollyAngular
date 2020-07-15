import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { MUnitPhrase } from '../../models/unit-phrase';
import { AppService } from '../../view-models/app.service';

@Component({
  selector: 'app-phrases-textbook',
  templateUrl: './phrases-textbook.component.html',
  styleUrls: ['./phrases-textbook.component.css', '../../common/common.css']
})
export class PhrasesTextbookComponent implements OnInit {

  constructor(private appService: AppService,
              public phrasesUnitService: PhrasesUnitService,
              public settingsService: SettingsService) { }

  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;
  textbookFilter = 0;

  ngOnInit() {
    this.appService.initializeObject.subscribe(_ => {
      this.rows = this.settingsService.USROWSPERPAGE;
      this.onRefresh();
    });
  }

  paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    this.onRefresh();
  }

  onRefresh() {
    this.phrasesUnitService.getDataInLang(this.page, this.rows, this.filter, this.filterType, this.textbookFilter).subscribe();
  }

  onEnterFilter() {
    if (this.filter && this.filterType === 0)
      this.filterType = 1;
    else if (!this.filter && this.filterType !== 0)
      this.filterType = 0;
    this.onRefresh();
  }

  deletePhrase(item: MUnitPhrase) {
    this.phrasesUnitService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

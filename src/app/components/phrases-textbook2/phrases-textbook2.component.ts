import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { SettingsService } from '../../view-models/settings.service';
import { MUnitPhrase } from '../../models/unit-phrase';
import { googleString } from '../../common/common';
import { AppService } from '../../view-models/app.service';

@Component({
  selector: 'app-phrases-textbook2',
  templateUrl: './phrases-textbook2.component.html',
  styleUrls: ['./phrases-textbook2.component.css']
})
export class PhrasesTextbook2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'TEXTBOOKNAME', 'UNIT', 'PART', 'SEQNUM', 'PHRASEID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  constructor(private appService: AppService,
              private phrasesUnitService: PhrasesUnitService,
              private settingsService: SettingsService) { }

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
    this.rows = event.pageSize;
    this.page = event.pageIndex + 1;
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

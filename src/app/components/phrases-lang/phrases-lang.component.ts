import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';
import { googleString } from '../../common/common';
import { SettingsService } from '../../view-models/settings.service';
import { AppService } from '../../view-models/app.service';

@Component({
  selector: 'app-phrases-lang',
  templateUrl: './phrases-lang.component.html',
  styleUrls: ['./phrases-lang.component.css', '../../common/common.css']
})
export class PhrasesLangComponent implements OnInit {

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              private phrasesLangService: PhrasesLangService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.appService.initializeComplete.subscribe(_ => {
      this.onRefresh();
    });
  }

  paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    this.onRefresh();
  }

  onRefresh() {
    this.phrasesLangService.getData(this.page, this.rows, this.filter, this.filterType).subscribe();
  }

  onEnterFilter() {
    if (this.filter && this.filterType === 0)
      this.filterType = 1;
    else if (!this.filter && this.filterType !== 0)
      this.filterType = 0;
    this.onRefresh();
  }

  deletePhrase(id: number) {
    this.phrasesLangService.delete(id);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

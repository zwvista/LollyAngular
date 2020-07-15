import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { AppService } from '../../view-models/app.service';

@Component({
  selector: 'app-phrases-lang2',
  templateUrl: './phrases-lang2.component.html',
  styleUrls: ['./phrases-lang2.component.css']
})
export class PhrasesLang2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              public phrasesLangService: PhrasesLangService,
              public settingsService: SettingsService) { }

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

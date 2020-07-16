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
    this.rows = event.rows;
    this.page = event.page + 1;
    this.onRefresh();
  }

  onRefresh() {
    this.phrasesLangService.getData(this.page, this.rows, this.filter, this.filterType).subscribe();
  }

  deletePhrase(id: number) {
    this.phrasesLangService.delete(id);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

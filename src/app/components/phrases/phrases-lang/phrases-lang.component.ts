import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../../view-models/wpp/phrases-lang.service';
import { googleString } from '../../../common/common';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { AppService } from '../../../view-models/misc/app.service';
import { MLangPhrase } from '../../../models/wpp/lang-phrase';
import { container } from 'tsyringe';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-phrases-lang',
  templateUrl: './phrases-lang.component.html',
  styleUrls: ['./phrases-lang.component.css', '../../../common.css'],
})
export class PhrasesLangComponent implements OnInit {

  appService = container.resolve(AppService);
  phrasesLangService = container.resolve(PhrasesLangService);
  settingsService = container.resolve(SettingsService);
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor() { }

  async ngOnInit() {
    await this.appService.getData();
    this.rows = this.settingsService.USROWSPERPAGE;
    await this.onRefresh();
  }

  async paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    await this.onRefresh();
  }

  async onRefresh() {
    await this.phrasesLangService.getData(this.page, this.rows, this.filter, this.filterType);
  }

  async deletePhrase(item: MLangPhrase) {
    await this.phrasesLangService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

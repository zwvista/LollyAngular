import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { PhrasesUnitService } from '../../../view-models/wpp/phrases-unit.service';
import { MUnitPhrase } from '../../../models/wpp/unit-phrase';
import { AppService } from '../../../view-models/misc/app.service';
import { container } from 'tsyringe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-phrases-textbook',
  templateUrl: './phrases-textbook.component.html',
  styleUrls: ['./phrases-textbook.component.css', '../../../common.css']
})
export class PhrasesTextbookComponent implements OnInit, OnDestroy {

  appService = container.resolve(AppService);
  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  subscription = new Subscription();
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;
  textbookFilter = 0;

  constructor() { }

  ngOnInit() {
    this.appService.initializeObject.subscribe(_ => {
      this.rows = this.settingsService.USROWSPERPAGE;
      this.onRefresh();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    await this.onRefresh();
  }

  async onRefresh() {
    this.phrasesUnitService.getDataInLang(this.page, this.rows, this.filter, this.filterType, this.textbookFilter);
  }

  async deletePhrase(item: MUnitPhrase) {
    await this.phrasesUnitService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

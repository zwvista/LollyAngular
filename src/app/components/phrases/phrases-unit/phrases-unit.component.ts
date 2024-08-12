import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../../view-models/wpp/phrases-unit.service';
import { googleString } from '../../../common/common';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { MUnitPhrase } from '../../../models/wpp/unit-phrase';
import { AppService } from '../../../view-models/misc/app.service';
import { container } from 'tsyringe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-phrases-unit',
  templateUrl: './phrases-unit.component.html',
  styleUrls: ['./phrases-unit.component.css', '../../../common.css']
})
export class PhrasesUnitComponent implements OnInit, OnDestroy {

  appService = container.resolve(AppService);
  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  subscription = new Subscription();
  filter: string;
  filterType = 0;

  constructor() { }

  ngOnInit() {
    this.subscription.add(this.appService.initializeObject.subscribe(_ => {
      this.onRefresh();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onReorder(from: number, to: number) {
    console.log(`${from},${to}`);
    this.phrasesUnitService.reindex(index => {});
  }

  async onRefresh() {
    await this.phrasesUnitService.getDataInTextbook(this.filter, this.filterType);
  }

  async deletePhrase(item: MUnitPhrase) {
    await this.phrasesUnitService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

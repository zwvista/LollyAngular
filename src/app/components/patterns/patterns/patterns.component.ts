import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from '../../../view-models/misc/app.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { PatternsService } from '../../../view-models/wpp/patterns.service';
import { googleString } from '../../../common/common';
import { container } from 'tsyringe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css', '../../../common.css']
})
export class PatternsComponent implements OnInit, OnDestroy {

  appService = container.resolve(AppService);
  patternsService = container.resolve(PatternsService);
  settingsService = container.resolve(SettingsService);
  subscription = new Subscription();
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor() { }

  ngOnInit(): void {
    this.subscription.add(this.appService.initializeObject.subscribe(_ => {
      this.rows = this.settingsService.USROWSPERPAGE;
      this.onRefresh();
    }));
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
    await this.patternsService.getData(this.page, this.rows, this.filter, this.filterType);
  }

  async deletePattern(id: number) {
    await this.patternsService.delete(id);
  }

  googlePattern(pattern: string) {
    googleString(pattern);
  }

}

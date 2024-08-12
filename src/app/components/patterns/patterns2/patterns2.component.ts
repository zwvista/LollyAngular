import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../view-models/misc/app.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { PatternsService } from '../../../view-models/wpp/patterns.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-patterns2',
  templateUrl: './patterns2.component.html',
  styleUrls: ['./patterns2.component.css']
})
export class Patterns2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'PATTERN', 'NOTE', 'TAGS', 'ACTION'];

  appService = container.resolve(AppService);
  patternsService = container.resolve(PatternsService);
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
    this.rows = event.pageSize;
    this.page = event.pageIndex + 1;
    await this.onRefresh();
  }

  async onRefresh() {
    await this.patternsService.getData(this.page, this.rows, this.filter, this.filterType);
  }

  async deletePattern(id: number) {
    await this.patternsService.delete(id);
  }

  googlePattern(phrase: string) {
    googleString(phrase);
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../../view-models/app.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { PatternsService } from '../../view-models/patterns.service';
import { MPattern } from '../../models/wpp/pattern';

@Component({
  selector: 'app-patterns2',
  templateUrl: './patterns2.component.html',
  styleUrls: ['./patterns2.component.css']
})
export class Patterns2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'PATTERN', 'NOTE', 'TAGS', 'ACTION'];

  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              public patternsService: PatternsService,
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
    this.patternsService.getData(this.page, this.rows, this.filter, this.filterType).subscribe();
  }

  deletePattern(id: number) {
    this.patternsService.delete(id);
  }

  googlePattern(phrase: string) {
    googleString(phrase);
  }

}

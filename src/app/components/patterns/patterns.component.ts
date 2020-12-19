import { Component, OnInit } from '@angular/core';
import { AppService } from '../../view-models/app.service';
import { SettingsService } from '../../view-models/settings.service';
import { PatternsService } from '../../view-models/patterns.service';
import { googleString } from '../../common/common';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css', '../../common/common.css']
})
export class PatternsComponent implements OnInit {

  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              public patternsService: PatternsService,
              public settingsService: SettingsService) { }

  ngOnInit(): void {
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
    this.patternsService.getData(this.page, this.rows, this.filter, this.filterType).subscribe();
  }

  deletePattern(id: number) {
    this.patternsService.delete(id);
  }

  googlePattern(pattern: string) {
    googleString(pattern);
  }

}

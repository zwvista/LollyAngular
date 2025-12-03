import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { PatternsService } from '../../../shared/view-models/wpp/patterns.service';
import { container } from 'tsyringe';
import { MatDialog } from '@angular/material/dialog';
import { PatternsDetail2Component } from '../patterns-detail2/patterns-detail2.component';

@Component({
    selector: 'app-patterns2',
    templateUrl: './patterns2.component.html',
    styleUrls: ['./patterns2.component.css'],
    standalone: false
})
export class Patterns2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'PATTERN', 'TAGS', 'TITLE', 'URL', 'ACTION'];

  appService = container.resolve(AppService);
  patternsService = container.resolve(PatternsService);
  settingsService = container.resolve(SettingsService);

  constructor(private dialog: MatDialog) { }

  async ngOnInit() {
    await this.appService.getData();
    this.patternsService.rows = this.settingsService.USROWSPERPAGE;
    await this.onRefresh();
  }

  async paginate(event) {
    this.patternsService.rows = event.pageSize;
    this.patternsService.page = event.pageIndex + 1;
    await this.onRefresh();
  }

  async onRefresh() {
    await this.patternsService.getData();
  }

  async deletePattern(id: number) {
    await this.patternsService.delete(id);
  }

  googlePattern(phrase: string) {
    googleString(phrase);
  }

  showDetailDialog(id: number) {
    const dialogRef = this.dialog.open(PatternsDetail2Component, {
      data: { id },
      width: '750px'
    });
    dialogRef.afterClosed().subscribe((res) => {
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../view-models/misc/app.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { PatternsService } from '../../../view-models/wpp/patterns.service';
import { googleString } from '../../../common/common';
import { container } from 'tsyringe';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PatternsDetailComponent } from '../patterns-detail/patterns-detail.component';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['./patterns.component.css', '../../../common.css'],
})
export class PatternsComponent implements OnInit {

  appService = container.resolve(AppService);
  patternsService = container.resolve(PatternsService);
  settingsService = container.resolve(SettingsService);
  dialogRef: DynamicDialogRef | undefined;
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor(public dialogService: DialogService) { }

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
    await this.patternsService.getData(this.page, this.rows, this.filter, this.filterType);
  }

  async deletePattern(id: number) {
    await this.patternsService.delete(id);
  }

  googlePattern(pattern: string) {
    googleString(pattern);
  }

  showDetailDialog(id: number) {
    this.dialogRef = this.dialogService.open(PatternsDetailComponent, {
      data: { id },
      width: '750px'
    });
    this.dialogRef.onClose.subscribe((res) => {
    });
  }
}

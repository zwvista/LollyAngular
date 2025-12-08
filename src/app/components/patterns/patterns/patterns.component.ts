import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { PatternsService } from '../../../shared/view-models/wpp/patterns.service';
import { googleString } from '../../../shared/common/common';
import { container } from 'tsyringe';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PatternsDetailComponent } from '../patterns-detail/patterns-detail.component';

@Component({
    selector: 'app-patterns',
    templateUrl: './patterns.component.html',
    styleUrls: ['./patterns.component.css', '../../../common.css'],
    standalone: false
})
export class PatternsComponent implements OnInit {

  appService = container.resolve(AppService);
  patternsService = container.resolve(PatternsService);
  settingsService = container.resolve(SettingsService);
  dialogRef: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) { }

  async ngOnInit() {
    await this.appService.getData();
    await this.onRefresh();
  }

  async paginate(event) {
    this.patternsService.rows = event.rows;
    this.patternsService.page = event.page + 1;
    await this.onRefresh();
  }

  async onRefresh() {
    await this.patternsService.getData();
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

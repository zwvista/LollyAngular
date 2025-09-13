import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../../shared/view-models/wpp/phrases-lang.service';
import { googleString } from '../../../shared/common/common';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { MLangPhrase } from '../../../shared/models/wpp/lang-phrase';
import { container } from 'tsyringe';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PhrasesLangDetailComponent } from '../phrases-lang-detail/phrases-lang-detail.component';

@Component({
    selector: 'app-phrases-lang',
    templateUrl: './phrases-lang.component.html',
    styleUrls: ['./phrases-lang.component.css', '../../../common.css'],
    standalone: false
})
export class PhrasesLangComponent implements OnInit {

  appService = container.resolve(AppService);
  phrasesLangService = container.resolve(PhrasesLangService);
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
    await this.phrasesLangService.getData(this.page, this.rows, this.filter, this.filterType);
  }

  async deletePhrase(item: MLangPhrase) {
    await this.phrasesLangService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }

  showDetailDialog(id: number) {
    this.dialogRef = this.dialogService.open(PhrasesLangDetailComponent, {
      data: { id },
      width: '750px'
    });
    this.dialogRef.onClose.subscribe((res) => {
    });
  }
}

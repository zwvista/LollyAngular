import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { PhrasesUnitService } from '../../../shared/view-models/wpp/phrases-unit.service';
import { MUnitPhrase } from '../../../shared/models/wpp/unit-phrase';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { PhrasesTextbookDetailComponent } from '../phrases-textbook-detail/phrases-textbook-detail.component';

@Component({
    selector: 'app-phrases-textbook',
    templateUrl: './phrases-textbook.component.html',
    styleUrls: ['./phrases-textbook.component.css', '../../../common.css'],
    standalone: false
})
export class PhrasesTextbookComponent implements OnInit {

  appService = container.resolve(AppService);
  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  dialogRef: DynamicDialogRef | undefined;
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;
  textbookFilter = 0;

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
    await this.phrasesUnitService.getDataInLang(this.page, this.rows, this.filter, this.filterType, this.textbookFilter);
  }

  async deletePhrase(item: MUnitPhrase) {
    await this.phrasesUnitService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }

  showDetailDialog(id: number) {
    this.dialogRef = this.dialogService.open(PhrasesTextbookDetailComponent, {
      data: { id },
      width: '750px'
    });
    this.dialogRef.onClose.subscribe((res) => {
    });
  }
}

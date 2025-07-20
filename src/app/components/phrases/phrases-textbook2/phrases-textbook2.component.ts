import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../../shared/view-models/wpp/phrases-unit.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { MUnitPhrase } from '../../../shared/models/wpp/unit-phrase';
import { googleString } from '../../../shared/common/common';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { MatDialog } from '@angular/material/dialog';
import { PhrasesTextbookDetail2Component } from '../phrases-textbook-detail2/phrases-textbook-detail2.component';

@Component({
  selector: 'app-phrases-textbook2',
  templateUrl: './phrases-textbook2.component.html',
  styleUrls: ['./phrases-textbook2.component.css']
})
export class PhrasesTextbook2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'TEXTBOOKNAME', 'UNIT', 'PART', 'SEQNUM', 'PHRASEID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  appService = container.resolve(AppService);
  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;
  textbookFilter = 0;

  constructor(private dialog: MatDialog) { }

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
    await this.phrasesUnitService.getDataInLang(this.page, this.rows, this.filter, this.filterType, this.textbookFilter);
  }

  async deletePhrase(item: MUnitPhrase) {
    await this.phrasesUnitService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }

  showDetailDialog(id: number) {
    const dialogRef = this.dialog.open(PhrasesTextbookDetail2Component, {
      data: { id },
      width: '750px'
    });
    dialogRef.afterClosed().subscribe((res) => {
    });
  }
}

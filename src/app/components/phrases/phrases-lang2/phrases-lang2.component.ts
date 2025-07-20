import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../../shared/view-models/wpp/phrases-lang.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { MLangPhrase } from '../../../shared/models/wpp/lang-phrase';
import { container } from 'tsyringe';
import { MatDialog } from '@angular/material/dialog';
import { PhrasesLangDetail2Component } from '../phrases-lang-detail2/phrases-lang-detail2.component';

@Component({
  selector: 'app-phrases-lang2',
  templateUrl: './phrases-lang2.component.html',
  styleUrls: ['./phrases-lang2.component.css']
})
export class PhrasesLang2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  appService = container.resolve(AppService);
  phrasesLangService = container.resolve(PhrasesLangService);
  settingsService = container.resolve(SettingsService);
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

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
    await this.phrasesLangService.getData(this.page, this.rows, this.filter, this.filterType);
  }

  async deletePhrase(item: MLangPhrase) {
    await this.phrasesLangService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }

  showDetailDialog(id: number) {
    const dialogRef = this.dialog.open(PhrasesLangDetail2Component, {
      data: { id },
      width: '750px'
    });
    dialogRef.afterClosed().subscribe((res) => {
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../../shared/view-models/wpp/words-unit.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { MUnitWord } from '../../../shared/models/wpp/unit-word';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { MatDialog } from '@angular/material/dialog';
import { WordsTextbookDetail2Component } from '../words-textbook-detail2/words-textbook-detail2.component';

@Component({
    selector: 'app-words-textbook2',
    templateUrl: './words-textbook2.component.html',
    styleUrls: ['./words-textbook2.component.css'],
    standalone: false
})
export class WordsTextbook2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'TEXTBOOKNAME', 'UNIT', 'PART', 'SEQNUM', 'WORDID', 'WORD', 'NOTE', 'ACCURACY', 'ACTION'];

  appService = container.resolve(AppService);
  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  rows = 0;
  page = 1;
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
    await this.wordsUnitService.getDataInLang(this.page, this.rows, this.textbookFilter);
  }

  async deleteWord(item: MUnitWord) {
    await this.wordsUnitService.delete(item);
  }

  async getNote(item: MUnitWord) {
    await this.wordsUnitService.getNote(item);
  }

  async clearNote(item: MUnitWord) {
    await this.wordsUnitService.clearNote(item);
  }

  googleWord(word: string) {
    googleString(word);
  }

  showDetailDialog(id: number) {
    const dialogRef = this.dialog.open(WordsTextbookDetail2Component, {
      data: { id },
      width: '750px'
    });
    dialogRef.afterClosed().subscribe((res) => {
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../../view-models/wpp/words-lang.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { MLangWord } from '../../../models/wpp/lang-word';
import { AppService } from '../../../view-models/misc/app.service';
import { container } from 'tsyringe';
import { MatDialog } from '@angular/material/dialog';
import { WordsLangDetail2Component } from '../words-lang-detail2/words-lang-detail2.component';

@Component({
  selector: 'app-words-lang2',
  templateUrl: './words-lang2.component.html',
  styleUrls: ['./words-lang2.component.css']
})
export class WordsLang2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'WORD', 'NOTE', 'ACCURACY', 'ACTION'];

  appService = container.resolve(AppService);
  wordsLangService = container.resolve(WordsLangService);
  settingsService = container.resolve(SettingsService);
  newWord: string;
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
    await this.wordsLangService.getData(this.page, this.rows, this.filter, this.filterType);
  }

  async deleteWord(item: MLangWord) {
    await this.wordsLangService.delete(item);
  }

  async getNote(item: MLangWord) {
    await this.wordsLangService.getNote(item);
  }

  async clearNote(item: MLangWord) {
    await this.wordsLangService.clearNote(item);
  }

  googleWord(word: string) {
    googleString(word);
  }

  showDetailDialog(id: number) {
    const dialogRef = this.dialog.open(WordsLangDetail2Component, {
      data: { id },
      width: '750px'
    });
    dialogRef.afterClosed().subscribe((res) => {
    });
  }
}

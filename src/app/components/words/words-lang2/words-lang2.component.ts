import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../../shared/view-models/wpp/words-lang.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { MLangWord } from '../../../shared/models/wpp/lang-word';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { MatDialog } from '@angular/material/dialog';
import { WordsLangDetail2Component } from '../words-lang-detail2/words-lang-detail2.component';

@Component({
    selector: 'app-words-lang2',
    templateUrl: './words-lang2.component.html',
    styleUrls: ['./words-lang2.component.css'],
    standalone: false
})
export class WordsLang2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'WORD', 'NOTE', 'ACCURACY', 'ACTION'];

  appService = container.resolve(AppService);
  wordsLangService = container.resolve(WordsLangService);
  settingsService = container.resolve(SettingsService);

  constructor(private dialog: MatDialog) { }

  async ngOnInit() {
    await this.appService.getData();
    this.wordsLangService.rows = this.settingsService.USROWSPERPAGE;
    await this.onRefresh();
  }

  async paginate(event) {
    this.wordsLangService.rows = event.pageSize;
    this.wordsLangService.page = event.pageIndex + 1;
    await this.onRefresh();
  }

  async onRefresh() {
    await this.wordsLangService.getData();
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

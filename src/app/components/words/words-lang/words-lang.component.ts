import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../../shared/view-models/wpp/words-lang.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { MLangWord } from '../../../shared/models/wpp/lang-word';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WordsLangDetailComponent } from '../words-lang-detail/words-lang-detail.component';

@Component({
  selector: 'app-words-lang',
  templateUrl: './words-lang.component.html',
  styleUrls: ['./words-lang.component.css', '../../../common.css'],
})
export class WordsLangComponent implements OnInit {

  appService = container.resolve(AppService);
  wordsLangService = container.resolve(WordsLangService);
  settingsService = container.resolve(SettingsService);
  dialogRef: DynamicDialogRef | undefined;
  newWord: string;
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
    this.dialogRef = this.dialogService.open(WordsLangDetailComponent, {
      data: { id },
      width: '750px'
    });
    this.dialogRef.onClose.subscribe((res) => {
    });
  }
}

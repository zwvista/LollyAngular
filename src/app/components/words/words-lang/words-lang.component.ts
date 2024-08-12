import { Component, OnDestroy, OnInit } from '@angular/core';
import { WordsLangService } from '../../../view-models/wpp/words-lang.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { MLangWord } from '../../../models/wpp/lang-word';
import { AppService } from '../../../view-models/misc/app.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-words-lang',
  templateUrl: './words-lang.component.html',
  styleUrls: ['./words-lang.component.css', '../../../common.css']
})
export class WordsLangComponent implements OnInit {

  appService = container.resolve(AppService);
  wordsLangService = container.resolve(WordsLangService);
  settingsService = container.resolve(SettingsService);
  newWord: string;
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor() { }

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

  async getNote(index: number) {
    console.log(index);
    await this.wordsLangService.getNote(index);
  }

  googleWord(word: string) {
    googleString(word);
  }
}

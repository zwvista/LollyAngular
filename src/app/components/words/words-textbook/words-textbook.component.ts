import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { AppService } from '../../../view-models/misc/app.service';
import { container } from 'tsyringe';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-words-textbook',
  templateUrl: './words-textbook.component.html',
  styleUrls: ['./words-textbook.component.css', '../../../common.css']
})
export class WordsTextbookComponent implements OnInit, OnDestroy {

  appService = container.resolve(AppService);
  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  subscription = new Subscription();
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;
  textbookFilter = 0;

  constructor() { }

  ngOnInit() {
    this.subscription.add(this.appService.initializeObject.subscribe(async _ => {
      this.rows = this.settingsService.USROWSPERPAGE;
      await this.onRefresh();
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  async paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    await this.onRefresh();
  }

  async onRefresh() {
    await this.wordsUnitService.getDataInLang(this.page, this.rows, this.filter, this.filterType, this.textbookFilter);
  }

  async deleteWord(item: MUnitWord) {
    await this.wordsUnitService.delete(item);
  }

  async getNote(index: number) {
    console.log(index);
    await this.wordsUnitService.getNote(index);
  }

  googleWord(word: string) {
    googleString(word);
  }
}

import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../view-models/words-lang.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { MLangWord } from '../../models/lang-word';
import { AppService } from '../../view-models/app.service';

@Component({
  selector: 'app-words-lang',
  templateUrl: './words-lang.component.html',
  styleUrls: ['./words-lang.component.css', '../../common/common.css']
})
export class WordsLangComponent implements OnInit {

  newWord: string;
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              private wordsLangService: WordsLangService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.appService.initializeComplete.subscribe(_ => {
      this.rows = this.settingsService.USROWSPERPAGE;
      this.onRefresh();
    });
  }

  paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    this.onRefresh();
  }

  onEnterNewWord() {
    if (!this.newWord) return;
    const o = this.wordsLangService.newLangWord();
    o.WORD = this.settingsService.autoCorrectInput(this.newWord);
    this.newWord = '';
    this.wordsLangService.create(o).subscribe(id => {
      o.ID = id as number;
      this.wordsLangService.langWords.push(o);
    });
  }

  onRefresh() {
    this.wordsLangService.getData(this.page, this.rows, this.filter, this.filterType).subscribe();
  }

  onEnterFilter() {
    if (this.filter && this.filterType === 0)
      this.filterType = 1;
    else if (!this.filter && this.filterType !== 0)
      this.filterType = 0;
    this.onRefresh();
  }

  deleteWord(item: MLangWord) {
    this.wordsLangService.delete(item);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsLangService.getNote(index).subscribe();
  }

  updateLevel(item: MLangWord, delta: number) {
    this.settingsService.updateLevel(item, item.ID, delta).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }
}

import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../../view-models/wpp/words-lang.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { MLangWord } from '../../../models/wpp/lang-word';
import { AppService } from '../../../view-models/misc/app.service';

@Component({
  selector: 'app-words-lang',
  templateUrl: './words-lang.component.html',
  styleUrls: ['./words-lang.component.css', '../../../common/common.css']
})
export class WordsLangComponent implements OnInit {

  newWord: string;
  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              public wordsLangService: WordsLangService,
              public settingsService: SettingsService) { }

  ngOnInit() {
    this.appService.initializeObject.subscribe(_ => {
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

  deleteWord(item: MLangWord) {
    this.wordsLangService.delete(item);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsLangService.getNote(index).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }
}

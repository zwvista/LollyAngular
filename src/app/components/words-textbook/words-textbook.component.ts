import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { MUnitWord } from '../../models/unit-word';

@Component({
  selector: 'app-words-textbook',
  templateUrl: './words-textbook.component.html',
  styleUrls: ['./words-textbook.component.css', '../../common/common.css']
})
export class WordsTextbookComponent implements OnInit {

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;
  filter: string;
  filterType = 0;
  textbookFilter = 0;

  constructor(private wordsUnitService: WordsUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    this.onRefresh();
  }

  onRefresh() {
    this.wordsUnitService.getDataInLang(this.page, this.rows, this.filter, this.filterType, this.textbookFilter).subscribe();
  }

  onEnterFilter() {
    if (this.filter && this.filterType === 0)
      this.filterType = 1;
    else if (!this.filter && this.filterType !== 0)
      this.filterType = 0;
    this.onRefresh();
  }

  deleteWord(item: MUnitWord) {
    this.wordsUnitService.delete(item);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsUnitService.getNote(index).subscribe();
  }

  updateLevel(item: MUnitWord, delta: number) {
    this.settingsService.updateLevel(item, item.WORDID, delta).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }
}

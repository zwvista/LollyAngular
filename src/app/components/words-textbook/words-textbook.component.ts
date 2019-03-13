import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { WordsUnitService } from '../../view-models/words-unit.service';

@Component({
  selector: 'app-words-textbook',
  templateUrl: './words-textbook.component.html',
  styleUrls: ['./words-textbook.component.css', '../../common/common.css']
})
export class WordsTextbookComponent implements OnInit {

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

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
    this.wordsUnitService.getDataInLang(this.page,  this.rows).subscribe();
  }

  getNote(index: number) {
    console.log(index);
    this.wordsUnitService.getNote(index).subscribe();
  }

  updateLevel(index: number, delta: number) {
    const o = this.wordsUnitService.textbookWords[index];
    this.settingsService.updateLevel(o, o.WORDID, delta).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }
}

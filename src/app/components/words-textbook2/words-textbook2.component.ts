import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { MUnitWord } from '../../models/unit-word';

@Component({
  selector: 'app-words-textbook2',
  templateUrl: './words-textbook2.component.html',
  styleUrls: ['./words-textbook2.component.css']
})
export class WordsTextbook2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'TEXTBOOKNAME', 'UNIT', 'PART', 'SEQNUM', 'WORDID', 'WORD', 'NOTE', 'LEVEL', 'ACTION'];

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

  constructor(private wordsUnitService: WordsUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.pageSize;
    this.page = event.pageIndex + 1;
    this.onRefresh();
  }

  onRefresh() {
    this.wordsUnitService.getDataInLang(this.page,  this.rows).subscribe();
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

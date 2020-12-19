import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { MUnitWord } from '../../models/wpp/unit-word';
import { AppService } from '../../view-models/app.service';

@Component({
  selector: 'app-words-textbook',
  templateUrl: './words-textbook.component.html',
  styleUrls: ['./words-textbook.component.css', '../../common/common.css']
})
export class WordsTextbookComponent implements OnInit {

  rows = 0;
  page = 1;
  filter: string;
  filterType = 0;
  textbookFilter = 0;

  constructor(private appService: AppService,
              public wordsUnitService: WordsUnitService,
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

  onRefresh() {
    this.wordsUnitService.getDataInLang(this.page, this.rows, this.filter, this.filterType, this.textbookFilter).subscribe();
  }

  deleteWord(item: MUnitWord) {
    this.wordsUnitService.delete(item);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsUnitService.getNote(index).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }
}

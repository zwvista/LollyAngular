import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { AppService } from '../../../view-models/misc/app.service';

@Component({
  selector: 'app-words-textbook2',
  templateUrl: './words-textbook2.component.html',
  styleUrls: ['./words-textbook2.component.css']
})
export class WordsTextbook2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'TEXTBOOKNAME', 'UNIT', 'PART', 'SEQNUM', 'WORDID', 'WORD', 'NOTE', 'ACCURACY', 'ACTION'];

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
    this.rows = event.pageSize;
    this.page = event.pageIndex + 1;
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

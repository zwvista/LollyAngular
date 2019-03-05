import { Component, OnInit } from '@angular/core';
import { WordsTextbookService } from '../../view-models/words-textbook.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';

@Component({
  selector: 'app-words-textbook',
  templateUrl: './words-textbook.component.html',
  styleUrls: ['./words-textbook.component.css', '../../common/common.css']
})
export class WordsTextbookComponent implements OnInit {

  rows = this.settingsService.USROWSPERPAGE;

  constructor(private wordsTextbookService: WordsTextbookService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.rows;
    this.wordsTextbookService.getData(event.page + 1, this.rows).subscribe();
  }

  onRefresh() {
    this.wordsTextbookService.getData(1,  this.rows).subscribe();
  }

  getNote(index: number) {
    console.log(index);
    this.wordsTextbookService.getNote(index).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }

}

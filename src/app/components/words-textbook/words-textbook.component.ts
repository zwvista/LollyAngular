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
  page = 1;

  constructor(private wordsTextbookService: WordsTextbookService,
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
    this.wordsTextbookService.getData(this.page,  this.rows).subscribe();
  }

  getNote(index: number) {
    console.log(index);
    this.wordsTextbookService.getNote(index).subscribe();
  }

  updateLevel(index: number, delta: number) {
    const o = this.wordsTextbookService.textbookWords[index];
    this.settingsService.updateLevel(o, o.WORDID, delta).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }

  speak(word: string) {
    this.settingsService.speech.speak({
      text: word,
      queue: false,
    });
  }
}

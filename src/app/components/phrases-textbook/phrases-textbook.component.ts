import { Component, OnInit } from '@angular/core';
import { PhrasesTextbookService } from '../../view-models/phrases-textbook.service';
import { WordsTextbookService } from '../../view-models/words-textbook.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';

@Component({
  selector: 'app-phrases-textbook',
  templateUrl: './phrases-textbook.component.html',
  styleUrls: ['./phrases-textbook.component.css', '../../common/common.css']
})
export class PhrasesTextbookComponent implements OnInit {

  constructor(private phrasesTextbookService: PhrasesTextbookService,
              private settingsService: SettingsService) { }

  rows = this.settingsService.USROWSPERPAGE;

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.rows;
    this.phrasesTextbookService.getData(event.page + 1, this.rows).subscribe();
  }

  onRefresh() {
    this.phrasesTextbookService.getData(1,  this.rows).subscribe();
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }

  speak(phrase: string) {
    this.settingsService.speech.speak({
      text: phrase,
      queue: false,
    });
  }
}

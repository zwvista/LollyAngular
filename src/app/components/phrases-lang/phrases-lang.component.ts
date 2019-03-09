import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';
import { googleString } from '../../common/common';
import { WordsTextbookService } from '../../view-models/words-textbook.service';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-phrases-lang',
  templateUrl: './phrases-lang.component.html',
  styleUrls: ['./phrases-lang.component.css', '../../common/common.css']
})
export class PhrasesLangComponent implements OnInit {

  rows = this.settingsService.USROWSPERPAGE;

  constructor(private phrasesLangService: PhrasesLangService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.rows;
    this.phrasesLangService.getData(event.page + 1, this.rows).subscribe();
  }

  onRefresh() {
    this.phrasesLangService.getData(1,  this.rows).subscribe();
  }

  deletePhrase(index: number) {
    console.log(index);
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

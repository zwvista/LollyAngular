import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../view-models/words-lang.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';

@Component({
  selector: 'app-words-lang',
  templateUrl: './words-lang.component.html',
  styleUrls: ['./words-lang.component.css', '../../common/common.css']
})
export class WordsLangComponent implements OnInit {

  newWord: string;

  constructor(private wordsLangService: WordsLangService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.wordsLangService.getData().subscribe();
  }

  onEnter() {
    if (!this.newWord) return;
    const o = this.wordsLangService.newLangWord();
    o.WORD = this.settingsService.autoCorrectInput(this.newWord);
    this.wordsLangService.create(o).subscribe(id => {
      o.ID = id as number;
      this.wordsLangService.langWords.push(o);
      this.newWord = '';
    });
  }

  deleteWord(index: number) {
    console.log(index);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsLangService.getNote(index).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }
}

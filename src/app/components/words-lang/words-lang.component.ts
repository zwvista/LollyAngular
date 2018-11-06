import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../view-models/words-lang.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-words-lang',
  templateUrl: './words-lang.component.html',
  styleUrls: ['./words-lang.component.css', '../../common/common.css']
})
export class WordsLangComponent implements OnInit {

  newWord: string;

  constructor(public wordsLangService: WordsLangService) { }

  ngOnInit() {
    this.wordsLangService.getData().subscribe();
  }

  onEnter() {
    if (!this.newWord) return;
    const o = this.wordsLangService.newLangWord();
    o.WORD = this.newWord;
    this.wordsLangService.create(o).subscribe(id => {
      o.ID = id as number;
      this.wordsLangService.langWords.push(o);
      this.newWord = '';
    });
  }

  deleteWord(index: number) {
    console.log(index);
  }

  // https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab
  googleWord(WORD: string) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(WORD), '_blank');
  }
}

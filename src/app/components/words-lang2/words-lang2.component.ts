import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../view-models/words-lang.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';

@Component({
  selector: 'app-words-lang2',
  templateUrl: './words-lang2.component.html',
  styleUrls: ['./words-lang2.component.css']
})
export class WordsLang2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'WORD', 'NOTE', 'LEVEL', 'ACTION'];

  newWord: string;
  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

  constructor(private wordsLangService: WordsLangService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.pageSize;
    this.page = event.pageIndex + 1;
    this.onRefresh();
  }

  onEnter() {
    if (!this.newWord) return;
    const o = this.wordsLangService.newLangWord();
    o.WORD = this.settingsService.autoCorrectInput(this.newWord);
    this.newWord = '';
    this.wordsLangService.create(o).subscribe(id => {
      o.ID = id as number;
      this.wordsLangService.langWords.push(o);
    });
  }

  onRefresh() {
    this.wordsLangService.getData(this.page,  this.rows).subscribe();
  }

  deleteWord(ID: number) {
    this.wordsLangService.delete(ID);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsLangService.getNote(index).subscribe();
  }

  updateLevel(index: number, delta: number) {
    const o = this.wordsLangService.langWords[index];
    this.settingsService.updateLevel(o, o.ID, delta).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }

}

import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { AppService } from '../../../view-models/misc/app.service';

@Component({
  selector: 'app-words-unit',
  templateUrl: './words-unit.component.html',
  styleUrls: ['./words-unit.component.css', '../../../common/common.css']
})
export class WordsUnitComponent implements OnInit {

  newWord: string;
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              public wordsUnitService: WordsUnitService,
              public settingsService: SettingsService) { }

  ngOnInit() {
    this.appService.initializeObject.subscribe(_ => {
      this.onRefresh();
    });
  }

  onEnterNewWord() {
    if (!this.newWord) return;
    const o = this.wordsUnitService.newUnitWord();
    o.WORD = this.settingsService.autoCorrectInput(this.newWord);
    this.newWord = '';
    this.wordsUnitService.create(o).subscribe(id => {
      o.ID = id as number;
      this.wordsUnitService.unitWords.push(o);
    });
  }

  onRefresh() {
    this.wordsUnitService.getDataInTextbook(this.filter, this.filterType).subscribe();
  }

  onReorder(from: number, to: number) {
    console.log(`${from},${to}`);
    this.wordsUnitService.reindex(index => {});
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

  getNotes(ifEmpty: boolean) {
    this.wordsUnitService.getNotes(ifEmpty, () => {}, () => {});
  }
}

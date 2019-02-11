import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { interval, Subscription } from 'rxjs';
import { UserSettingService } from '../../services/user-setting.service';
import { SettingsService } from '../../view-models/settings.service';
import { LangWordService } from '../../services/lang-word.service';

@Component({
  selector: 'app-words-unit',
  templateUrl: './words-unit.component.html',
  styleUrls: ['./words-unit.component.css', '../../common/common.css']
})
export class WordsUnitComponent implements OnInit {

  newWord: string;

  constructor(private wordsUnitService: WordsUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.wordsUnitService.getData().subscribe();
  }

  onEnter() {
    if (!this.newWord) return;
    const o = this.wordsUnitService.newUnitWord();
    o.WORD = this.settingsService.autoCorrectInput(this.newWord);
    this.wordsUnitService.create(o).subscribe(id => {
      o.ID = id as number;
      this.wordsUnitService.unitWords.push(o);
      this.newWord = '';
    });
  }

  onReorder(from: number, to: number) {
    console.log(`${from},${to}`);
    this.wordsUnitService.reindex(index => {});
  }

  deleteWord(index: number) {
    console.log(index);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsUnitService.getNote(index).subscribe();
  }

  // https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab
  googleWord(WORD: string) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(WORD), '_blank');
  }

  getNotes(ifEmpty: boolean) {
    this.wordsUnitService.getNotes(ifEmpty, () => {}, () => {});
  }
}

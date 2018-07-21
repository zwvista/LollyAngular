import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { UnitWord } from '../../models/unit-word';
import '../../common/array';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-words-unit',
  templateUrl: './words-unit.component.html',
  styleUrls: ['./words-unit.component.css']
})
export class WordsUnitComponent implements OnInit {

  newWord: string;
  dictUrl = 'about:blank';
  timer: number;

  constructor(public wordsUnitService: WordsUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.wordsUnitService.getData();
  }

  onEnter() {
    if (!this.newWord) return;
    const o = this.wordsUnitService.newUnitWord();
    o.WORD = this.newWord;
    this.wordsUnitService.create(o).subscribe(id => {
      o.ID = id as number;
      this.wordsUnitService.unitWords.push(o);
      this.newWord = '';
    });
  }

  private reindex() {
    this.wordsUnitService.reindex(index => {});
  }

  onWordReorder(from: number, to: number) {
    console.log(`${from},${to}`);
    this.wordsUnitService.unitWords.move(from, to);
    this.reindex();
  }

  onWordSelect(unitWord: UnitWord) {
    this.dictUrl = this.settingsService.selectedDictOnline.urlString(unitWord.WORD);
  }

  deleteWord(index: number) {
    console.log(index);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsUnitService.getNote(index).subscribe();
  }

  onload(event: Event) {
    const iFrame = event.target as HTMLIFrameElement;
    console.log(iFrame);
    const iFrameBody = iFrame.contentWindow.document.body.innerHTML;
    // if ( iFrame.contentDocument ) { // FF
    //   iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
    // } else if ( iFrame.contentWindow ) { // IE
    //   iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
    // }
    console.log(iFrameBody);
  }

  // https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab
  googleWord(WORD: string) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(WORD), '_blank');
  }

  getNotes(ifEmpty: boolean) {
    this.wordsUnitService.getNotes(ifEmpty, n => this.timer = setInterval(() => {
      this.wordsUnitService.getNextNote(() => {}, () => {
        clearInterval(this.timer);
      });
    }, n));
  }
}

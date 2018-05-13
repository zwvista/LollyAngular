import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { UnitWord } from '../../models/unit-word';
import '../../common/array-prototype-move';

@Component({
  selector: 'app-words-unit',
  templateUrl: './words-unit.component.html',
  styleUrls: ['./words-unit.component.css']
})
export class WordsUnitComponent implements OnInit {

  selectedUnitWord: UnitWord;
  newWord: string;

  constructor(private wordsUnitService: WordsUnitService) { }

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

  deleteWord(index: number) {
    console.log(index);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsUnitService.getNote(index).subscribe();
  }
}

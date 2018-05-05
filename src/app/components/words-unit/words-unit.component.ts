import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { UnitWord } from '../../models/unit-word';

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

  deleteWord(index: number) {
    console.log(index);
  }
}

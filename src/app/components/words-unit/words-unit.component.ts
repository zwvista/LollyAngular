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

  constructor(private wordsUnitService: WordsUnitService) { }

  ngOnInit() {
    this.wordsUnitService.getData();
  }

}

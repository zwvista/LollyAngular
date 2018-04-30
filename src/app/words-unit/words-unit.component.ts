import { Component, OnInit } from '@angular/core';
import {WordsUnitService} from '../view-models/words-unit.service';

@Component({
  selector: 'app-words-unit',
  templateUrl: './words-unit.component.html',
  styleUrls: ['./words-unit.component.css']
})
export class WordsUnitComponent implements OnInit {

  constructor(private wordsUnitService: WordsUnitService) { }

  ngOnInit() {
  }

}

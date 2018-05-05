import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitWord } from '../../models/unit-word';

@Component({
  selector: 'app-words-unit-detail',
  templateUrl: './words-unit-detail.component.html',
  styleUrls: ['./words-unit-detail.component.css']
})
export class WordsUnitDetailComponent implements OnInit {

  unitWord: UnitWord;

  constructor(private wordsUnitService: WordsUnitService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.wordsUnitService.unitWords.find(value => value.ID === id);
    this.unitWord = o ? {...o} : this.wordsUnitService.newUnitWord();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.unitWord.ID) {
      this.wordsUnitService.update(this.unitWord).subscribe(_ => this.goBack());
    } else {
      this.wordsUnitService.create(this.unitWord).subscribe(_ => this.goBack());
    }
  }

}

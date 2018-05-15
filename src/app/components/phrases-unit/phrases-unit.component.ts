import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { UnitWord } from '../../models/unit-word';
import { UnitPhrase } from '../../models/unit-phrase';

@Component({
  selector: 'app-phrases-unit',
  templateUrl: './phrases-unit.component.html',
  styleUrls: ['./phrases-unit.component.css']
})
export class PhrasesUnitComponent implements OnInit {

  constructor(private phrasesUnitService: PhrasesUnitService) { }

  ngOnInit() {
    this.phrasesUnitService.getData();
  }

}

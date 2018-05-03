import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';

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

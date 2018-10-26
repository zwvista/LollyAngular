import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitPhrase } from '../../models/unit-phrase';

@Component({
  selector: 'app-phrases-unit-detail',
  templateUrl: './phrases-unit-detail.component.html',
  styleUrls: ['./phrases-unit-detail.component.css', '../../common/common.css']
})
export class PhrasesUnitDetailComponent implements OnInit {

  unitPhrase: UnitPhrase;

  constructor(private phrasesUnitService: PhrasesUnitService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.phrasesUnitService.unitPhrases.find(value => value.ID === id);
    this.unitPhrase = o ? {...o} as UnitPhrase : this.phrasesUnitService.newUnitPhrase();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.unitPhrase.ID) {
      this.phrasesUnitService.update(this.unitPhrase).subscribe(_ => this.goBack());
    } else {
      this.phrasesUnitService.create(this.unitPhrase).subscribe(_ => this.goBack());
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitPhrase } from '../../models/unit-phrase';
import { SettingsService } from '../../view-models/settings.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-phrases-unit-detail',
  templateUrl: './phrases-unit-detail.component.html',
  styleUrls: ['./phrases-unit-detail.component.css', '../../common/common.css']
})
export class PhrasesUnitDetailComponent implements OnInit {

  unitPhrase: UnitPhrase;
  units: SelectItem[];
  parts: SelectItem[];

  constructor(private phrasesUnitService: PhrasesUnitService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.phrasesUnitService.unitPhrases.find(value => value.ID === id);
    this.unitPhrase = o ? {...o} as UnitPhrase : this.phrasesUnitService.newUnitPhrase();
    this.units = this.settingsService.units.map(v => ({label: v, value: Number(v)}));
    this.parts = this.settingsService.parts.map((v, i) => ({label: v, value: i + 1}));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.unitPhrase.PHRASE = this.settingsService.autoCorrectInput(this.unitPhrase.PHRASE);
    if (this.unitPhrase.ID) {
      this.phrasesUnitService.update(this.unitPhrase).subscribe(_ => this.goBack());
    } else {
      this.phrasesUnitService.create(this.unitPhrase).subscribe(_ => this.goBack());
    }
  }

}

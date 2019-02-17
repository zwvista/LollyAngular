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

  item: UnitPhrase;
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
    this.item = o ? {...o} as UnitPhrase : this.phrasesUnitService.newUnitPhrase();
    this.units = this.settingsService.units.map(v => ({label: v, value: Number(v)}));
    this.parts = this.settingsService.parts.map((v, i) => ({label: v, value: i + 1}));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
    if (this.item.ID) {
      this.phrasesUnitService.update(this.item).subscribe(_ => this.goBack());
    } else {
      this.phrasesUnitService.create(this.item).subscribe(_ => this.goBack());
    }
  }

}

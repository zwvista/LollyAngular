import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UnitWord } from '../../models/unit-word';
import { SettingsService } from '../../view-models/settings.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-words-unit-detail',
  templateUrl: './words-unit-detail.component.html',
  styleUrls: ['./words-unit-detail.component.css', '../../common/common.css']
})
export class WordsUnitDetailComponent implements OnInit {

  item: UnitWord;
  units: SelectItem[];
  parts: SelectItem[];

  constructor(private wordsUnitService: WordsUnitService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.wordsUnitService.unitWords.find(value => value.ID === id);
    this.item = o ? {...o} as UnitWord : this.wordsUnitService.newUnitWord();
    this.units = this.settingsService.units.map(v => ({label: v, value: Number(v)}));
    this.parts = this.settingsService.parts.map((v, i) => ({label: v, value: i + 1}));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    if (this.item.ID) {
      this.wordsUnitService.update(this.item).subscribe(_ => this.goBack());
    } else {
      this.wordsUnitService.create(this.item).subscribe(_ => this.goBack());
    }
  }

}

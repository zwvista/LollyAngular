import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../../view-models/wpp/phrases-unit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MUnitPhrase } from '../../../models/wpp/unit-phrase';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-phrases-unit-detail',
  templateUrl: './phrases-unit-detail.component.html',
  styleUrls: ['./phrases-unit-detail.component.css', '../../../common/common.css']
})
export class PhrasesUnitDetailComponent implements OnInit {

  item: MUnitPhrase;

  constructor(private phrasesUnitService: PhrasesUnitService,
              public settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.phrasesUnitService.unitPhrases.find(value => value.ID === id);
    this.item = o ? {...o} as MUnitPhrase : this.phrasesUnitService.newUnitPhrase();
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

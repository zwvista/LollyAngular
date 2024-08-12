import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MUnitPhrase } from '../../../models/wpp/unit-phrase';
import { PhrasesUnitService } from '../../../view-models/wpp/phrases-unit.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-phrases-textbook-detail',
  templateUrl: './phrases-textbook-detail.component.html',
  styleUrls: ['./phrases-textbook-detail.component.css']
})
export class PhrasesTextbookDetailComponent implements OnInit {

  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitPhrase;

  constructor(private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.phrasesUnitService.textbookPhrases.find(value => value.ID === id);
  }

  goBack() {
    this.location.back();
  }

  async save() {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
    await this.phrasesUnitService.update(this.item);
    this.goBack();
  }
}

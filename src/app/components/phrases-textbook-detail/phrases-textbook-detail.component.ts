import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../view-models/settings.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MUnitPhrase } from '../../models/wpp/unit-phrase';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';

@Component({
  selector: 'app-phrases-textbook-detail',
  templateUrl: './phrases-textbook-detail.component.html',
  styleUrls: ['./phrases-textbook-detail.component.css']
})
export class PhrasesTextbookDetailComponent implements OnInit {

  item: MUnitPhrase;

  constructor(private phrasesUnitService: PhrasesUnitService,
              public settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.phrasesUnitService.textbookPhrases.find(value => value.ID === id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
    this.phrasesUnitService.update(this.item).subscribe(_ => this.goBack());
  }
}

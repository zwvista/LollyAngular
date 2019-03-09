import { Component, OnInit } from '@angular/core';
import { PhrasesTextbookService } from '../../view-models/phrases-textbook.service';
import { SettingsService } from '../../view-models/settings.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MUnitPhrase } from '../../models/unit-phrase';

@Component({
  selector: 'app-phrases-textbook-detail',
  templateUrl: './phrases-textbook-detail.component.html',
  styleUrls: ['./phrases-textbook-detail.component.css']
})
export class PhrasesTextbookDetailComponent implements OnInit {

  item: MUnitPhrase;

  constructor(private phrasesTextbookService: PhrasesTextbookService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.phrasesTextbookService.textbookPhrases.find(value => value.ID === id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
  }
}

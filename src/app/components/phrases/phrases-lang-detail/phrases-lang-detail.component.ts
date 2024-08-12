import { Component, OnInit } from '@angular/core';
import { MLangPhrase } from '../../../models/wpp/lang-phrase';
import { PhrasesLangService } from '../../../view-models/wpp/phrases-lang.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-phrases-lang-detail',
  templateUrl: './phrases-lang-detail.component.html',
  styleUrls: ['./phrases-lang-detail.component.css', '../../../common.css']
})
export class PhrasesLangDetailComponent implements OnInit {

  phrasesLangService = container.resolve(PhrasesLangService);
  settingsService = container.resolve(SettingsService);
  item: MLangPhrase;

  constructor(private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.phrasesLangService.langPhrases.find(value => value.ID === id);
    this.item = o ? {...o} as MLangPhrase : this.phrasesLangService.newLangPhrase();
  }

  goBack() {
    this.location.back();
  }

  async save() {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
    await (this.item.ID ? this.phrasesLangService.update(this.item) : this.phrasesLangService.create(this.item));
    this.goBack();
  }
}

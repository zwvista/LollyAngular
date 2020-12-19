import { Component, OnInit } from '@angular/core';
import { MLangPhrase } from '../../models/wpp/lang-phrase';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-phrases-lang-detail',
  templateUrl: './phrases-lang-detail.component.html',
  styleUrls: ['./phrases-lang-detail.component.css', '../../common/common.css']
})
export class PhrasesLangDetailComponent implements OnInit {

  item: MLangPhrase;

  constructor(private phrasesLangService: PhrasesLangService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.phrasesLangService.langPhrases.find(value => value.ID === id);
    this.item = o ? {...o} as MLangPhrase : this.phrasesLangService.newLangPhrase();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
    if (this.item.ID) {
      this.phrasesLangService.update(this.item).subscribe(_ => this.goBack());
    } else {
      this.phrasesLangService.create(this.item).subscribe(_ => this.goBack());
    }
  }

}

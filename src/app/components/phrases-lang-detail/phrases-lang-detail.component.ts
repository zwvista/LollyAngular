import { Component, OnInit } from '@angular/core';
import { LangPhrase } from '../../models/lang-phrase';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-phrases-lang-detail',
  templateUrl: './phrases-lang-detail.component.html',
  styleUrls: ['./phrases-lang-detail.component.css', '../../common/common.css']
})
export class PhrasesLangDetailComponent implements OnInit {

  langPhrase: LangPhrase;

  constructor(private phrasesLangService: PhrasesLangService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.phrasesLangService.langPhrases.find(value => value.ID === id);
    this.langPhrase = o ? {...o} as LangPhrase : this.phrasesLangService.newLangPhrase();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.langPhrase.ID) {
      this.phrasesLangService.update(this.langPhrase).subscribe(_ => this.goBack());
    } else {
      this.phrasesLangService.create(this.langPhrase).subscribe(_ => this.goBack());
    }
  }

}

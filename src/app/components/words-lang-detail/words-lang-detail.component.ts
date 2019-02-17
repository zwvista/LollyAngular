import { Component, OnInit } from '@angular/core';
import { LangWord } from '../../models/lang-word';
import { WordsLangService } from '../../view-models/words-lang.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { LangWordService } from '../../services/lang-word.service';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-words-lang-detail',
  templateUrl: './words-lang-detail.component.html',
  styleUrls: ['./words-lang-detail.component.css', '../../common/common.css']
})
export class WordsLangDetailComponent implements OnInit {

  item: LangWord;

  constructor(private wordsLangService: WordsLangService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.wordsLangService.langWords.find(value => value.ID === id);
    this.item = o ? {...o} as LangWord : this.wordsLangService.newLangWord();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    if (this.item.ID) {
      this.wordsLangService.update(this.item).subscribe(_ => this.goBack());
    } else {
      this.wordsLangService.create(this.item).subscribe(_ => this.goBack());
    }
  }

}

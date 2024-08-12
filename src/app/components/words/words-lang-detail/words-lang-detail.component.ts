import { Component, OnInit } from '@angular/core';
import { MLangWord } from '../../../models/wpp/lang-word';
import { WordsLangService } from '../../../view-models/wpp/words-lang.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-words-lang-detail',
  templateUrl: './words-lang-detail.component.html',
  styleUrls: ['./words-lang-detail.component.css', '../../../common.css']
})
export class WordsLangDetailComponent implements OnInit {

  wordsLangService = container.resolve(WordsLangService);
  settingsService = container.resolve(SettingsService);
  item: MLangWord;

  constructor(private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.wordsLangService.langWords.find(value => value.ID === id);
    this.item = o || this.wordsLangService.newLangWord();
  }

  goBack() {
    this.location.back();
  }

  async save() {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    await (this.item.ID ? this.wordsLangService.update(this.item) : this.wordsLangService.create(this.item));
    this.goBack();
  }
}

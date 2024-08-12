import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-words-unit-detail',
  templateUrl: './words-unit-detail.component.html',
  styleUrls: ['./words-unit-detail.component.css', '../../../common.css']
})
export class WordsUnitDetailComponent implements OnInit {

  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitWord;

  constructor(private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.wordsUnitService.unitWords.find(value => value.ID === id);
    this.item = o || this.wordsUnitService.newUnitWord();
  }

  goBack() {
    this.location.back();
  }

  async save() {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    await (this.item.ID ? this.wordsUnitService.update(this.item) : this.wordsUnitService.create(this.item));
    this.goBack();
  }
}

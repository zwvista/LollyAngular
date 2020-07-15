import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MUnitWord } from '../../models/unit-word';
import { SettingsService } from '../../view-models/settings.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-words-unit-detail',
  templateUrl: './words-unit-detail.component.html',
  styleUrls: ['./words-unit-detail.component.css', '../../common/common.css']
})
export class WordsUnitDetailComponent implements OnInit {

  item: MUnitWord;

  constructor(private wordsUnitService: WordsUnitService,
              public settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.wordsUnitService.unitWords.find(value => value.ID === id);
    this.item = o || this.wordsUnitService.newUnitWord();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    if (this.item.ID) {
      this.wordsUnitService.update(this.item).subscribe(_ => this.goBack());
    } else {
      this.wordsUnitService.create(this.item).subscribe(_ => this.goBack());
    }
  }

}

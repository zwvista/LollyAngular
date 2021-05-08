import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';

@Component({
  selector: 'app-words-textbook-detail',
  templateUrl: './words-textbook-detail.component.html',
  styleUrls: ['./words-textbook-detail.component.css', '../../../common/common.css']
})
export class WordsTextbookDetailComponent implements OnInit {

  item: MUnitWord;

  constructor(private wordsUnitService: WordsUnitService,
              public settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.wordsUnitService.textbookWords.find(value => value.ID === id);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    this.wordsUnitService.update(this.item).subscribe(_ => this.goBack());
  }

}

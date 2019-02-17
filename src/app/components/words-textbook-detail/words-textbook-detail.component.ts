import { Component, OnInit } from '@angular/core';
import { TextbookWord } from '../../models/textbook-word';
import { SelectItem } from 'primeng/api';
import { WordsTextbookService } from '../../view-models/words-textbook.service';
import { SettingsService } from '../../view-models/settings.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-words-textbook-detail',
  templateUrl: './words-textbook-detail.component.html',
  styleUrls: ['./words-textbook-detail.component.css', '../../common/common.css']
})
export class WordsTextbookDetailComponent implements OnInit {

  item: TextbookWord;
  units: SelectItem[];
  parts: SelectItem[];

  constructor(private wordsTextbookService: WordsTextbookService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.item = this.wordsTextbookService.textbookWords.find(value => value.ID === id);
    this.units = this.settingsService.units.map(v => ({label: v, value: Number(v)}));
    this.parts = this.settingsService.parts.map((v, i) => ({label: v, value: i + 1}));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
  }

}

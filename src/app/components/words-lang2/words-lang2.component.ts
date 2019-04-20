import { Component, OnInit } from '@angular/core';
import { WordsLangService } from '../../view-models/words-lang.service';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-words-lang2',
  templateUrl: './words-lang2.component.html',
  styleUrls: ['./words-lang2.component.css']
})
export class WordsLang2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'WORD', 'NOTE', 'LEVEL', 'ACTION'];

  newWord: string;
  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

  constructor(private wordsLangService: WordsLangService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.wordsLangService.getData(this.page,  this.rows).subscribe();
  }

}

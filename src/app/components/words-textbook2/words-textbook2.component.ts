import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-words-textbook2',
  templateUrl: './words-textbook2.component.html',
  styleUrls: ['./words-textbook2.component.css']
})
export class WordsTextbook2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'TEXTBOOKNAME', 'UNIT', 'PART', 'SEQNUM', 'WORDID', 'WORD', 'NOTE', 'LEVEL'];

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

  constructor(private wordsUnitService: WordsUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.wordsUnitService.getDataInLang(this.page,  this.rows).subscribe();
  }

}

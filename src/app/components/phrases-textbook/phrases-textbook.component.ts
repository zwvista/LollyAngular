import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';

@Component({
  selector: 'app-phrases-textbook',
  templateUrl: './phrases-textbook.component.html',
  styleUrls: ['./phrases-textbook.component.css', '../../common/common.css']
})
export class PhrasesTextbookComponent implements OnInit {

  constructor(private phrasesUnitService: PhrasesUnitService,
              private settingsService: SettingsService) { }

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    this.onRefresh();
  }

  onRefresh() {
    this.phrasesUnitService.getDataInLang(this.page,  this.rows).subscribe();
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

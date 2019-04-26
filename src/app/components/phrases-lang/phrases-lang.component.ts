import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';
import { googleString } from '../../common/common';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-phrases-lang',
  templateUrl: './phrases-lang.component.html',
  styleUrls: ['./phrases-lang.component.css', '../../common/common.css']
})
export class PhrasesLangComponent implements OnInit {

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

  constructor(private phrasesLangService: PhrasesLangService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.rows;
    this.page = event.page + 1;
    this.onRefresh();
  }

  onRefresh() {
    this.phrasesLangService.getData(this.page,  this.rows).subscribe();
  }

  deletePhrase(id: number) {
    this.phrasesLangService.delete(id);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

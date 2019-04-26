import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';

@Component({
  selector: 'app-phrases-lang2',
  templateUrl: './phrases-lang2.component.html',
  styleUrls: ['./phrases-lang2.component.css']
})
export class PhrasesLang2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

  constructor(private phrasesLangService: PhrasesLangService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  paginate(event) {
    this.rows = event.pageSize;
    this.page = event.pageIndex + 1;
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

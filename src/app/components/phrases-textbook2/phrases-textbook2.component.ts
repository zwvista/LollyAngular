import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-phrases-textbook2',
  templateUrl: './phrases-textbook2.component.html',
  styleUrls: ['./phrases-textbook2.component.css']
})
export class PhrasesTextbook2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'TEXTBOOKNAME', 'UNIT', 'PART', 'SEQNUM', 'PHRASEID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  constructor(private phrasesUnitService: PhrasesUnitService,
              private settingsService: SettingsService) { }

  rows = this.settingsService.USROWSPERPAGE;
  page = 1;

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.phrasesUnitService.getDataInLang(this.page,  this.rows).subscribe();
  }

}

import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-phrases-unit2',
  templateUrl: './phrases-unit2.component.html',
  styleUrls: ['./phrases-unit2.component.css']
})
export class PhrasesUnit2Component implements OnInit {

  displayedColumns: string[] = ['ID', 'UNIT', 'PART', 'SEQNUM', 'PHRASEID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  constructor(private phrasesUnitService: PhrasesUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.phrasesUnitService.getDataInTextbook().subscribe();
  }

}

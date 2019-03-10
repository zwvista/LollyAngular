import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { googleString } from '../../common/common';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-phrases-unit',
  templateUrl: './phrases-unit.component.html',
  styleUrls: ['./phrases-unit.component.css', '../../common/common.css']
})
export class PhrasesUnitComponent implements OnInit {

  constructor(private phrasesUnitService: PhrasesUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onReorder(from: number, to: number) {
    console.log(`${from},${to}`);
    this.phrasesUnitService.reindex(index => {});
  }

  onRefresh() {
    this.phrasesUnitService.getData().subscribe();
  }

  deletePhrase(index: number) {
    console.log(index);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { SettingsService } from '../../view-models/settings.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MUnitWord } from '../../models/unit-word';
import { MatTable } from '@angular/material/table';
import { googleString } from '../../common/common';
import { MUnitPhrase } from '../../models/unit-phrase';
import { AppService } from '../../view-models/app.service';

@Component({
  selector: 'app-phrases-unit2',
  templateUrl: './phrases-unit2.component.html',
  styleUrls: ['./phrases-unit2.component.css']
})
export class PhrasesUnit2Component implements OnInit {
  @ViewChild('table', {static: true}) table: MatTable<MUnitWord>;

  displayedColumns: string[] = ['position', 'ID', 'UNIT', 'PART', 'SEQNUM', 'PHRASEID', 'PHRASE', 'TRANSLATION', 'ACTION'];
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              private phrasesUnitService: PhrasesUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.appService.initializeObject.subscribe(_ => {
      this.onRefresh();
    });
  }

  onRefresh() {
    this.phrasesUnitService.getDataInTextbook(this.filter, this.filterType).subscribe();
  }

  onEnterFilter() {
    if (this.filter && this.filterType === 0)
      this.filterType = 1;
    else if (!this.filter && this.filterType !== 0)
      this.filterType = 0;
    this.onRefresh();
  }

  dropTable(event: CdkDragDrop<MUnitPhrase[]>) {
    const prevIndex = this.phrasesUnitService.unitPhrases.findIndex((d) => d === event.item.data);
    moveItemInArray(this.phrasesUnitService.unitPhrases, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  deletePhrase(item: MUnitPhrase) {
    this.phrasesUnitService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { SettingsService } from '../../view-models/settings.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MUnitWord } from '../../models/unit-word';
import { MatTable } from '@angular/material/table';
import { googleString } from '../../common/common';
import { MUnitPhrase } from '../../models/unit-phrase';

@Component({
  selector: 'app-phrases-unit2',
  templateUrl: './phrases-unit2.component.html',
  styleUrls: ['./phrases-unit2.component.css']
})
export class PhrasesUnit2Component implements OnInit {
  @ViewChild('table', {static: true}) table: MatTable<MUnitWord>;

  displayedColumns: string[] = ['position', 'ID', 'UNIT', 'PART', 'SEQNUM', 'PHRASEID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  constructor(private phrasesUnitService: PhrasesUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.phrasesUnitService.getDataInTextbook().subscribe();
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

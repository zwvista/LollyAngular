import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { PhrasesUnitService } from '../../../view-models/wpp/phrases-unit.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { MatTable } from '@angular/material/table';
import { googleString } from '../../../common/common';
import { MUnitPhrase } from '../../../models/wpp/unit-phrase';
import { AppService } from '../../../view-models/misc/app.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-phrases-unit2',
  templateUrl: './phrases-unit2.component.html',
  styleUrls: ['./phrases-unit2.component.css']
})
export class PhrasesUnit2Component implements OnInit {
  @ViewChild('table', {static: true}) table: MatTable<MUnitWord>;

  displayedColumns: string[] = ['position', 'ID', 'UNIT', 'PART', 'SEQNUM', 'PHRASEID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  appService = container.resolve(AppService);
  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  filter: string;
  filterType = 0;

  constructor() { }

  async ngOnInit() {
    await this.appService.getData();
    await this.onRefresh();
  }

  async onRefresh() {
    await this.phrasesUnitService.getDataInTextbook(this.filter, this.filterType);
  }

  dropTable(event: CdkDragDrop<MUnitPhrase[]>) {
    const prevIndex = this.phrasesUnitService.unitPhrases.findIndex((d) => d === event.item.data);
    moveItemInArray(this.phrasesUnitService.unitPhrases, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  async deletePhrase(item: MUnitPhrase) {
    await this.phrasesUnitService.delete(item);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }
}

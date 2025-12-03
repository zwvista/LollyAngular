import { Component, OnInit, ViewChild } from '@angular/core';
import { PhrasesUnitService } from '../../../shared/view-models/wpp/phrases-unit.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MUnitWord } from '../../../shared/models/wpp/unit-word';
import { MatTable } from '@angular/material/table';
import { googleString } from '../../../shared/common/common';
import { MUnitPhrase } from '../../../shared/models/wpp/unit-phrase';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { MatDialog } from '@angular/material/dialog';
import { PhrasesUnitDetail2Component } from '../phrases-unit-detail2/phrases-unit-detail2.component';

@Component({
    selector: 'app-phrases-unit2',
    templateUrl: './phrases-unit2.component.html',
    styleUrls: ['./phrases-unit2.component.css'],
    standalone: false
})
export class PhrasesUnit2Component implements OnInit {
  @ViewChild('table', {static: true}) table: MatTable<MUnitWord>;

  displayedColumns: string[] = ['position', 'ID', 'UNIT', 'PART', 'SEQNUM', 'PHRASEID', 'PHRASE', 'TRANSLATION', 'ACTION'];

  appService = container.resolve(AppService);
  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);

  constructor(private dialog: MatDialog) { }

  async ngOnInit() {
    await this.appService.getData();
    await this.onRefresh();
  }

  async onRefresh() {
    await this.phrasesUnitService.getDataInTextbook();
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

  showDetailDialog(id: number) {
    const dialogRef = this.dialog.open(PhrasesUnitDetail2Component, {
      data: { id },
      width: '750px'
    });
    dialogRef.afterClosed().subscribe((res) => {
    });
  }
}

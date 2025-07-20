import { Component, OnInit, ViewChild } from '@angular/core';
import { WordsUnitService } from '../../../shared/view-models/wpp/words-unit.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { MUnitWord } from '../../../shared/models/wpp/unit-word';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { MatDialog } from '@angular/material/dialog';
import { WordsUnitDetail2Component } from '../words-unit-detail2/words-unit-detail2.component';

@Component({
  selector: 'app-words-unit2',
  templateUrl: './words-unit2.component.html',
  styleUrls: ['./words-unit2.component.css']
})
export class WordsUnit2Component implements OnInit {
  // https://stackoverflow.com/questions/53377450/reorder-mat-table-rows-with-angular-materials-drag-and-drop
  @ViewChild('table', {static: true}) table: MatTable<MUnitWord>;

  displayedColumns: string[] = ['position', 'ID', 'UNIT', 'PART', 'SEQNUM', 'WORDID', 'WORD', 'NOTE', 'ACCURACY', 'ACTION'];

  appService = container.resolve(AppService);
  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  newWord: string;
  filter: string;
  filterType = 0;

  constructor(private dialog: MatDialog) { }

  async ngOnInit() {
    await this.appService.getData();
    await this.onRefresh();
  }

  async onEnterNewWord() {
    if (!this.newWord) return;
    const o = this.wordsUnitService.newUnitWord();
    o.WORD = this.settingsService.autoCorrectInput(this.newWord);
    this.newWord = '';
    const id = await this.wordsUnitService.create(o);
    o.ID = id as number;
    this.wordsUnitService.unitWords.push(o);
  }

  async onRefresh() {
    await this.wordsUnitService.getDataInTextbook(this.filter, this.filterType);
  }

  dropTable(event: CdkDragDrop<MUnitWord[]>) {
    const prevIndex = this.wordsUnitService.unitWords.findIndex((d) => d === event.item.data);
    moveItemInArray(this.wordsUnitService.unitWords, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  async deleteWord(item: MUnitWord) {
    await this.wordsUnitService.delete(item);
  }

  async getNote(item: MUnitWord) {
    await this.wordsUnitService.getNote(item);
  }

  async clearNote(item: MUnitWord) {
    await this.wordsUnitService.clearNote(item);
  }

  googleWord(word: string) {
    googleString(word);
  }

  getNotes(ifEmpty: boolean) {
    this.wordsUnitService.getNotes(ifEmpty, () => {}, () => {});
  }

  clearNotes(ifEmpty: boolean) {
    this.wordsUnitService.clearNotes(ifEmpty, () => {}, () => {});
  }

  showDetailDialog(id: number) {
    const dialogRef = this.dialog.open(WordsUnitDetail2Component, {
      data: { id },
      width: '750px'
    });
    dialogRef.afterClosed().subscribe((res) => {
    });
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { SettingsService } from '../../view-models/settings.service';
import { googleString } from '../../common/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { MUnitWord } from '../../models/unit-word';

@Component({
  selector: 'app-words-unit2',
  templateUrl: './words-unit2.component.html',
  styleUrls: ['./words-unit2.component.css']
})
export class WordsUnit2Component implements OnInit {
  // https://stackoverflow.com/questions/53377450/reorder-mat-table-rows-with-angular-materials-drag-and-drop
  @ViewChild('table', {static: true}) table: MatTable<MUnitWord>;

  displayedColumns: string[] = ['position', 'ID', 'UNIT', 'PART', 'SEQNUM', 'WORDID', 'WORD', 'NOTE', 'LEVEL', 'ACCURACY', 'ACTION'];

  newWord: string;
  filter: string;
  filterType = 0;

  constructor(private wordsUnitService: WordsUnitService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.onRefresh();
  }

  onEnterNewWord() {
    if (!this.newWord) return;
    const o = this.wordsUnitService.newUnitWord();
    o.WORD = this.settingsService.autoCorrectInput(this.newWord);
    this.newWord = '';
    this.wordsUnitService.create(o).subscribe(id => {
      o.ID = id as number;
      this.wordsUnitService.unitWords.push(o);
    });
  }

  onRefresh() {
    this.wordsUnitService.getDataInTextbook(this.filter, this.filterType).subscribe();
  }

  onEnterFilter() {
    if (this.filter && this.filterType === 0)
      this.filterType = 1;
    else if (!this.filter && this.filterType !== 0)
      this.filterType = 0;
    this.onRefresh();
  }

  dropTable(event: CdkDragDrop<MUnitWord[]>) {
    const prevIndex = this.wordsUnitService.unitWords.findIndex((d) => d === event.item.data);
    moveItemInArray(this.wordsUnitService.unitWords, prevIndex, event.currentIndex);
    this.table.renderRows();
  }

  deleteWord(item: MUnitWord) {
    this.wordsUnitService.delete(item);
  }

  getNote(index: number) {
    console.log(index);
    this.wordsUnitService.getNote(index).subscribe();
  }

  googleWord(word: string) {
    googleString(word);
  }

  getNotes(ifEmpty: boolean) {
    this.wordsUnitService.getNotes(ifEmpty, () => {}, () => {});
  }

  updateLevel(item: MUnitWord, delta: number) {
    this.settingsService.updateLevel(item, item.WORDID, delta).subscribe();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatLegacyTable as MatTable } from '@angular/material/legacy-table';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { AppService } from '../../../view-models/misc/app.service';

@Component({
  selector: 'app-words-unit2',
  templateUrl: './words-unit2.component.html',
  styleUrls: ['./words-unit2.component.css']
})
export class WordsUnit2Component implements OnInit {
  // https://stackoverflow.com/questions/53377450/reorder-mat-table-rows-with-angular-materials-drag-and-drop
  @ViewChild('table', {static: true}) table: MatTable<MUnitWord>;

  displayedColumns: string[] = ['position', 'ID', 'UNIT', 'PART', 'SEQNUM', 'WORDID', 'WORD', 'NOTE', 'ACCURACY', 'ACTION'];

  newWord: string;
  filter: string;
  filterType = 0;

  constructor(private appService: AppService,
              public wordsUnitService: WordsUnitService,
              public settingsService: SettingsService) { }

  ngOnInit() {
    this.appService.initializeObject.subscribe(_ => {
      this.onRefresh();
    });
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

}

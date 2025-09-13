import { Component, OnDestroy, OnInit } from '@angular/core';
import { WordsUnitService } from '../../../shared/view-models/wpp/words-unit.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { MUnitWord } from '../../../shared/models/wpp/unit-word';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WordsUnitDetailComponent } from '../words-unit-detail/words-unit-detail.component';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-words-unit',
    templateUrl: './words-unit.component.html',
    styleUrls: ['./words-unit.component.css', '../../../common.css'],
    standalone: false
})
export class WordsUnitComponent implements OnInit, OnDestroy {

  appService = container.resolve(AppService);
  wordsUnitService = container.resolve(WordsUnitService);
  settingsService: SettingsService = container.resolve(SettingsService);
  dialogRef: DynamicDialogRef | undefined;
  newWord: string;
  filter: string;
  filterType = 0;

  constructor(public dialogService: DialogService) { }

  async ngOnInit() {
    await this.appService.getData();
    await this.onRefresh();
  }

  ngOnDestroy() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
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

  async onReorder(from: number, to: number) {
    console.log(`${from},${to}`);
    await this.wordsUnitService.reindex(index => {});
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
    this.dialogRef = this.dialogService.open(WordsUnitDetailComponent, {
      data: { id },
      width: '750px'
    });
    this.dialogRef.onClose.subscribe((res) => {
    });
  }
}

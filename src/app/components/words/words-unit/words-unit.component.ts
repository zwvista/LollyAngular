import { Component, OnDestroy, OnInit } from '@angular/core';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { googleString } from '../../../common/common';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { AppService } from '../../../view-models/misc/app.service';
import { container } from 'tsyringe';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WordsUnitDetailComponent } from '../words-unit-detail/words-unit-detail.component';

@Component({
  selector: 'app-words-unit',
  templateUrl: './words-unit.component.html',
  styleUrls: ['./words-unit.component.css', '../../../common.css'],
  providers: [DialogService]
})
export class WordsUnitComponent implements OnInit, OnDestroy {

  appService = container.resolve(AppService);
  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  newWord: string;
  filter: string;
  filterType = 0;
  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) { }

  async ngOnInit() {
    await this.appService.getData();
    await this.onRefresh();
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
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

  async getNote(index: number) {
    console.log(index);
    await this.wordsUnitService.getNote(index);
  }

  googleWord(word: string) {
    googleString(word);
  }

  getNotes(ifEmpty: boolean) {
    this.wordsUnitService.getNotes(ifEmpty, () => {}, () => {});
  }

  showDetailDialog(id: number) {
    this.ref = this.dialogService.open(WordsUnitDetailComponent, {
      data: { id },
      width: '750px'
    });
    this.ref.onClose.subscribe((res) => {
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { googleString } from '../../../shared/common/common';
import { WordsUnitService } from '../../../shared/view-models/wpp/words-unit.service';
import { MUnitWord } from '../../../shared/models/wpp/unit-word';
import { AppService } from '../../../shared/view-models/misc/app.service';
import { container } from 'tsyringe';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { WordsTextbookDetailComponent } from '../words-textbook-detail/words-textbook-detail.component';

@Component({
    selector: 'app-words-textbook',
    templateUrl: './words-textbook.component.html',
    styleUrls: ['./words-textbook.component.css', '../../../common.css'],
    standalone: false
})
export class WordsTextbookComponent implements OnInit {

  appService = container.resolve(AppService);
  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  dialogRef: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) { }

  async ngOnInit() {
    await this.appService.getData();
    this.wordsUnitService.rows = this.settingsService.USROWSPERPAGE;
    await this.onRefresh();
  }

  async paginate(event) {
    this.wordsUnitService.rows = event.rows;
    this.wordsUnitService.page = event.page + 1;
    await this.onRefresh();
  }

  async onRefresh() {
    await this.wordsUnitService.getDataInLang();
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

  showDetailDialog(id: number) {
    this.dialogRef = this.dialogService.open(WordsTextbookDetailComponent, {
      data: { id },
      width: '750px'
    });
    this.dialogRef.onClose.subscribe((res) => {
    });
  }
}

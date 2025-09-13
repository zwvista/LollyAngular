import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { MUnitWord } from '../../../shared/models/wpp/unit-word';
import { WordsUnitService } from '../../../shared/view-models/wpp/words-unit.service';
import { container } from 'tsyringe';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-words-textbook-detail',
    templateUrl: './words-textbook-detail.component.html',
    styleUrls: ['./words-textbook-detail.component.css', '../../../common.css'],
    standalone: false
})
export class WordsTextbookDetailComponent implements OnInit {

  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitWord;

  constructor(public dialogRef: DynamicDialogRef,
              public dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    const id = this.dialogConfig.data.id;
    this.item = Object.create(this.wordsUnitService.textbookWords.find(value => value.ID === id)!) as MUnitWord;
  }

  cancel() {
    this.dialogRef.close();
  }

  async save() {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    await this.wordsUnitService.update(this.item);
    this.dialogRef.close();
  }
}

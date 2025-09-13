import { Component, OnInit } from '@angular/core';
import { WordsUnitService } from '../../../shared/view-models/wpp/words-unit.service';
import { MUnitWord } from '../../../shared/models/wpp/unit-word';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { container } from 'tsyringe';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-words-unit-detail',
    templateUrl: './words-unit-detail.component.html',
    styleUrls: ['./words-unit-detail.component.css', '../../../common.css'],
    standalone: false
})
export class WordsUnitDetailComponent implements OnInit {

  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitWord;

  constructor(public dialogRef: DynamicDialogRef,
              public dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    const id = this.dialogConfig.data.id;
    const itemOld = this.wordsUnitService.unitWords.find(value => value.ID === id);
    this.item = itemOld ? Object.create(itemOld) as MUnitWord : this.wordsUnitService.newUnitWord();
  }

  cancel() {
    this.dialogRef.close();
  }

  async save() {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    await (this.item.ID ? this.wordsUnitService.update(this.item) : this.wordsUnitService.create(this.item));
    this.dialogRef.close();
  }
}

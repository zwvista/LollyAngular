import { Component, Inject, OnInit } from '@angular/core';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';
import { MUnitWord } from '../../../models/wpp/unit-word';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { container } from 'tsyringe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-words-unit-detail2',
  templateUrl: './words-unit-detail2.component.html',
  styleUrls: ['./words-unit-detail2.component.css', '../../../common.css']
})
export class WordsUnitDetail2Component implements OnInit {

  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitWord;

  constructor(private dialogRef: MatDialogRef<WordsUnitDetail2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    const id = this.data.id;
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

import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { MUnitWord } from '../../../shared/models/wpp/unit-word';
import { WordsUnitService } from '../../../shared/view-models/wpp/words-unit.service';
import { container } from 'tsyringe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-words-textbook-detail2',
    templateUrl: './words-textbook-detail2.component.html',
    styleUrls: ['./words-textbook-detail2.component.css', '../../../common.css'],
    standalone: false
})
export class WordsTextbookDetail2Component implements OnInit {

  wordsUnitService = container.resolve(WordsUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitWord;

  constructor(private dialogRef: MatDialogRef<WordsTextbookDetail2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    const id = this.data.id;
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

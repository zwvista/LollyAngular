import { Component, Inject, OnInit } from '@angular/core';
import { MLangWord } from '../../../models/wpp/lang-word';
import { WordsLangService } from '../../../view-models/wpp/words-lang.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { container } from 'tsyringe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-words-lang-detail2',
  templateUrl: './words-lang-detail2.component.html',
  styleUrls: ['./words-lang-detail2.component.css', '../../../common.css']
})
export class WordsLangDetail2Component implements OnInit {

  wordsLangService = container.resolve(WordsLangService);
  settingsService = container.resolve(SettingsService);
  item: MLangWord;

  constructor(private dialogRef: MatDialogRef<WordsLangDetail2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    const id = this.data.id;
    const itemOld = this.wordsLangService.langWords.find(value => value.ID === id);
    this.item = itemOld ? Object.create(itemOld) as MLangWord : this.wordsLangService.newLangWord();
  }

  cancel() {
    this.dialogRef.close();
  }

  async save() {
    this.item.WORD = this.settingsService.autoCorrectInput(this.item.WORD);
    await (this.item.ID ? this.wordsLangService.update(this.item) : this.wordsLangService.create(this.item));
    this.dialogRef.close();
  }
}

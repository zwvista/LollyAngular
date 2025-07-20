import { Component, OnInit } from '@angular/core';
import { MLangWord } from '../../../shared/models/wpp/lang-word';
import { WordsLangService } from '../../../shared/view-models/wpp/words-lang.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { container } from 'tsyringe';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-words-lang-detail',
  templateUrl: './words-lang-detail.component.html',
  styleUrls: ['./words-lang-detail.component.css', '../../../common.css']
})
export class WordsLangDetailComponent implements OnInit {

  wordsLangService = container.resolve(WordsLangService);
  settingsService = container.resolve(SettingsService);
  item: MLangWord;

  constructor(public dialogRef: DynamicDialogRef,
              public dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    const id = this.dialogConfig.data.id;
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

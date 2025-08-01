import { Component, Inject, OnInit } from '@angular/core';
import { MLangPhrase } from '../../../shared/models/wpp/lang-phrase';
import { PhrasesLangService } from '../../../shared/view-models/wpp/phrases-lang.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { container } from 'tsyringe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-phrases-lang-detail2',
  templateUrl: './phrases-lang-detail2.component.html',
  styleUrls: ['./phrases-lang-detail2.component.css', '../../../common.css']
})
export class PhrasesLangDetail2Component implements OnInit {

  phrasesLangService = container.resolve(PhrasesLangService);
  settingsService = container.resolve(SettingsService);
  item: MLangPhrase;

  constructor(private dialogRef: MatDialogRef<PhrasesLangDetail2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    const id = this.data.id;
    const itemOld = this.phrasesLangService.langPhrases.find(value => value.ID === id);
    this.item = itemOld ? Object.create(itemOld) as MLangPhrase : this.phrasesLangService.newLangPhrase();
  }

  cancel() {
    this.dialogRef.close();
  }

  async save() {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
    await (this.item.ID ? this.phrasesLangService.update(this.item) : this.phrasesLangService.create(this.item));
    this.dialogRef.close();
  }
}

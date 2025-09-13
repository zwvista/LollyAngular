import { Component, OnInit } from '@angular/core';
import { MLangPhrase } from '../../../shared/models/wpp/lang-phrase';
import { PhrasesLangService } from '../../../shared/view-models/wpp/phrases-lang.service';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { container } from 'tsyringe';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-phrases-lang-detail',
    templateUrl: './phrases-lang-detail.component.html',
    styleUrls: ['./phrases-lang-detail.component.css', '../../../common.css'],
    standalone: false
})
export class PhrasesLangDetailComponent implements OnInit {

  phrasesLangService = container.resolve(PhrasesLangService);
  settingsService = container.resolve(SettingsService);
  item: MLangPhrase;

  constructor(public dialogRef: DynamicDialogRef,
              public dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    const id = this.dialogConfig.data.id;
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

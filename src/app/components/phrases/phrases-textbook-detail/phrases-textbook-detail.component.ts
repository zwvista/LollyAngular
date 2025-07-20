import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { MUnitPhrase } from '../../../shared/models/wpp/unit-phrase';
import { PhrasesUnitService } from '../../../shared/view-models/wpp/phrases-unit.service';
import { container } from 'tsyringe';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-phrases-textbook-detail',
  templateUrl: './phrases-textbook-detail.component.html',
  styleUrls: ['./phrases-textbook-detail.component.css']
})
export class PhrasesTextbookDetailComponent implements OnInit {

  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitPhrase;

  constructor(public dialogRef: DynamicDialogRef,
              public dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    const id = this.dialogConfig.data.id;
    this.item = Object.create(this.phrasesUnitService.textbookPhrases.find(value => value.ID === id)!) as MUnitPhrase;
  }

  cancel() {
    this.dialogRef.close();
  }

  async save() {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
    await this.phrasesUnitService.update(this.item);
    this.dialogRef.close();
  }
}

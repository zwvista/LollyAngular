import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../../shared/view-models/wpp/phrases-unit.service';
import { MUnitPhrase } from '../../../shared/models/wpp/unit-phrase';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { container } from 'tsyringe';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-phrases-unit-detail',
  templateUrl: './phrases-unit-detail.component.html',
  styleUrls: ['./phrases-unit-detail.component.css', '../../../common.css']
})
export class PhrasesUnitDetailComponent implements OnInit {

  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitPhrase;

  constructor(public dialogRef: DynamicDialogRef,
              public dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    const id = this.dialogConfig.data.id;
    const itemOld = this.phrasesUnitService.unitPhrases.find(value => value.ID === id);
    this.item = itemOld ? Object.create(itemOld) as MUnitPhrase : this.phrasesUnitService.newUnitPhrase();
  }

  cancel() {
    this.dialogRef.close();
  }

  async save() {
    this.item.PHRASE = this.settingsService.autoCorrectInput(this.item.PHRASE);
    await (this.item.ID ? this.phrasesUnitService.update(this.item) : this.phrasesUnitService.create(this.item));
    this.dialogRef.close();
  }
}

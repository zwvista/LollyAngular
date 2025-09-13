import { Component, Inject, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../../shared/view-models/wpp/phrases-unit.service';
import { MUnitPhrase } from '../../../shared/models/wpp/unit-phrase';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { container } from 'tsyringe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-phrases-unit-detail2',
    templateUrl: './phrases-unit-detail2.component.html',
    styleUrls: ['./phrases-unit-detail2.component.css', '../../../common.css'],
    standalone: false
})
export class PhrasesUnitDetail2Component implements OnInit {

  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitPhrase;

  constructor(private dialogRef: MatDialogRef<PhrasesUnitDetail2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    const id = this.data.id;
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

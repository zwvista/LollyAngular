import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { MUnitPhrase } from '../../../shared/models/wpp/unit-phrase';
import { PhrasesUnitService } from '../../../shared/view-models/wpp/phrases-unit.service';
import { container } from 'tsyringe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-phrases-textbook-detail2',
  templateUrl: './phrases-textbook-detail2.component.html',
  styleUrls: ['./phrases-textbook-detail2.component.css']
})
export class PhrasesTextbookDetail2Component implements OnInit {

  phrasesUnitService = container.resolve(PhrasesUnitService);
  settingsService = container.resolve(SettingsService);
  item: MUnitPhrase;

  constructor(private dialogRef: MatDialogRef<PhrasesTextbookDetail2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    const id = this.data.id;
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

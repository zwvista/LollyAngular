import { Component, Inject, OnInit } from '@angular/core';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { PatternsService } from '../../../view-models/wpp/patterns.service';
import { MPattern } from '../../../models/wpp/pattern';
import { container } from 'tsyringe';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-patterns-detail2',
  templateUrl: './patterns-detail2.component.html',
  styleUrls: ['./patterns-detail2.component.css']
})
export class PatternsDetail2Component implements OnInit {

  patternsService = container.resolve(PatternsService);
  settingsService = container.resolve(SettingsService);
  item: MPattern;

  constructor(private dialogRef: MatDialogRef<PatternsDetail2Component>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit() {
    const id = this.data.id;
    const itemOld = this.patternsService.patterns.find(value => value.ID === id);
    this.item = itemOld ? Object.create(itemOld) as MPattern : this.patternsService.newPattern();
  }

  cancel() {
    this.dialogRef.close();
  }

  async save() {
    this.item.PATTERN = this.settingsService.autoCorrectInput(this.item.PATTERN);
    await (this.item.ID ? this.patternsService.update(this.item) : this.patternsService.create(this.item));
    this.dialogRef.close();
  }
}

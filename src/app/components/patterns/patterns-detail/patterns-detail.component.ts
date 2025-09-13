import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../../shared/view-models/misc/settings.service';
import { PatternsService } from '../../../shared/view-models/wpp/patterns.service';
import { MPattern } from '../../../shared/models/wpp/pattern';
import { container } from 'tsyringe';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
    selector: 'app-patterns-detail',
    templateUrl: './patterns-detail.component.html',
    styleUrls: ['./patterns-detail.component.css'],
    standalone: false
})
export class PatternsDetailComponent implements OnInit {

  patternsService = container.resolve(PatternsService);
  settingsService = container.resolve(SettingsService);
  item: MPattern;

  constructor(public dialogRef: DynamicDialogRef,
              public dialogConfig: DynamicDialogConfig
  ) { }

  ngOnInit() {
    const id = this.dialogConfig.data.id;
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

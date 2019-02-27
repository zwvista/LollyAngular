import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../view-models/settings.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css', '../../common/common.css']
})
export class SettingsComponent implements OnInit {

  get unitFrom() {
    return this.settingsService.units[this.settingsService.USUNITFROM - 1];
  }
  get partFrom() {
    return this.settingsService.parts[this.settingsService.USPARTFROM - 1];
  }
  get unitTo() {
    return this.settingsService.units[this.settingsService.USUNITTO - 1];
  }
  get partTo() {
    return this.settingsService.parts[this.settingsService.USPARTTO - 1];
  }
  get toTypeIsUnit() {
    return this.toType === 0;
  }
  get toTypeIsPart() {
    return this.toType === 1;
  }
  get toTypeIsTo() {
    return this.toType === 2;
  }

  toTypes = ['Unit', 'Part', 'To'].map((v, i) => ({value: i, label: v}));
  toType = 0;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getData().subscribe(_ => this.updateTextbook());
  }

  onLangChange(index) {
    this.settingsService.setSelectedLangIndex(index).subscribe();
    this.settingsService.updateLang().subscribe();
  }

  onDictItemChange(index) {
    this.settingsService.selectedDictItemIndex = index;
    this.settingsService.updateDictItem().subscribe();
  }

  onDictNoteChange(index) {
    this.settingsService.selectedDictNoteIndex = index;
    this.settingsService.updateDictNote().subscribe();
  }

  onTextbookChange(index) {
    this.settingsService.selectedTextbookIndex = index;
    this.settingsService.updateTextbook().subscribe();
    this.updateTextbook();
  }

  onUnitFromChange(index) {
    if (!this.updateUnitFrom(index + 1)) return;
    if (this.toType === 0)
      this.updateSingleUnit();
    else if (this.toType === 1 || this.settingsService.isInvalidUnitPart)
      this.updateUnitPartTo();
  }

  onPartFromChange(index) {
    if (!this.updatePartFrom(index + 1)) return;
    if (this.toType === 1 || this.settingsService.isInvalidUnitPart)
      this.updateUnitPartTo();
  }

  onToTypeChange(index) {
    if (index === 0)
      this.updateSingleUnit();
    else if (index === 1)
      this.updateUnitPartTo();
  }

  onUnitToChange(index) {
    if (!this.updateUnitTo(index + 1)) return;
    if (this.toType === 1 || this.settingsService.isInvalidUnitPart)
      this.updateUnitPartFrom();
  }

  onPartToChange(index) {
    if (!this.updatePartTo(index + 1)) return;
    if (this.toType === 1 || this.settingsService.isInvalidUnitPart)
      this.updateUnitPartFrom();
  }

  updateTextbook() {
    this.toType = this.settingsService.isSingleUnitPart ? 1 : this.settingsService.isSingleUnit ? 0 : 2;
  }

  previousUnitPart() {
    if (this.toType === 0) {
      if (this.settingsService.USUNITFROM > 1) {
        this.updateUnitFrom(this.settingsService.USUNITFROM - 1);
        this.updateUnitTo(this.settingsService.USUNITFROM);
      }
    } else if (this.settingsService.USPARTFROM > 1) {
      this.updatePartFrom(this.settingsService.USPARTFROM - 1);
      this.updateUnitPartTo();
    } else if (this.settingsService.USUNITFROM > 1) {
      this.updateUnitFrom(this.settingsService.USUNITFROM - 1);
      this.updatePartFrom(this.settingsService.partCount);
      this.updateUnitPartTo();
    }
  }

  nextUnitPart() {
    if (this.toType === 0) {
      if (this.settingsService.USUNITFROM < this.settingsService.unitCount) {
        this.updateUnitFrom(this.settingsService.USUNITFROM + 1);
        this.updateUnitTo(this.settingsService.USUNITFROM);
      }
    } else if (this.settingsService.USPARTFROM < this.settingsService.partCount) {
      this.updatePartFrom(this.settingsService.USPARTFROM + 1);
      this.updateUnitPartTo();
    } else if (this.settingsService.USUNITFROM < this.settingsService.unitCount) {
      this.updateUnitFrom(this.settingsService.USUNITFROM + 1);
      this.updatePartFrom(1);
      this.updateUnitPartTo();
    }
  }

  updateUnitPartFrom() {
    this.updateUnitFrom(this.settingsService.USUNITTO);
    this.updatePartFrom(this.settingsService.USPARTTO);
  }

  updateUnitPartTo() {
    this.updateUnitTo(this.settingsService.USUNITFROM);
    this.updatePartTo(this.settingsService.USPARTFROM);
  }

  updateSingleUnit() {
    this.updateUnitTo(this.settingsService.USUNITFROM);
    this.updatePartFrom(1);
    this.updatePartTo(this.settingsService.partCount);
  }

  updateUnitFrom(v: number): boolean {
    if (this.settingsService.USUNITFROM === v) return false;
    this.settingsService.USUNITFROM = v;
    this.settingsService.updateUnitFrom().subscribe();
    return true;
  }

  updatePartFrom(v: number): boolean {
    if (this.settingsService.USPARTFROM === v) return false;
    this.settingsService.USPARTFROM = v;
    this.settingsService.updatePartFrom().subscribe();
    return true;
  }

  updateUnitTo(v: number): boolean {
    if (this.settingsService.USUNITTO === v) return false;
    this.settingsService.USUNITTO = v;
    this.settingsService.updateUnitTo().subscribe();
    return true;
  }

  updatePartTo(v: number): boolean {
    if (this.settingsService.USPARTTO === v) return false;
    this.settingsService.USPARTTO = v;
    this.settingsService.updatePartTo().subscribe();
    return true;
  }
}

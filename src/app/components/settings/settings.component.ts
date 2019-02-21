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

  unitPartTo: boolean;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getData().subscribe(_ => this.updateTextbook());
  }

  onLangChange(index) {
    this.settingsService.setSelectedLangIndex(index).subscribe();
    this.settingsService.updateLang().subscribe();
  }

  onDictGroupChange(index) {
    this.settingsService.selectedDictGroupIndex = index;
    this.settingsService.updateDictGroup().subscribe();
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
    this.settingsService.USUNITFROM = index + 1;
    this.settingsService.updateUnitFrom()
      .subscribe(_ => {
        if (!this.unitPartTo || this.settingsService.isInvalidUnitPart) {
          this.updateUnitPartTo();
        }
      });
  }

  onPartFromChange(index) {
    this.settingsService.USPARTFROM = index + 1;
    this.settingsService.updatePartFrom()
      .subscribe(_ => {
        if (!this.unitPartTo || this.settingsService.isInvalidUnitPart) {
          this.updateUnitPartTo();
        }
      });
  }

  onUnitToChange(index) {
    this.settingsService.USUNITTO = index + 1;
    this.settingsService.updateUnitTo()
      .subscribe(_ => {
        if (this.settingsService.isInvalidUnitPart) {
          this.updateUnitPartFrom();
        }
      });
  }

  onPartToChange(index) {
    this.settingsService.USPARTTO = index + 1;
    this.settingsService.updatePartTo()
      .subscribe(_ => {
        if (this.settingsService.isInvalidUnitPart) {
          this.updateUnitPartFrom();
        }
      });
  }

  updateTextbook() {
    this.unitPartTo = !this.settingsService.isSingleUnitPart;
  }

  updateUnitPartFrom() {
    if (this.settingsService.USUNITFROM !== this.settingsService.USUNITTO) {
      this.settingsService.USUNITFROM = this.settingsService.USUNITTO;
      this.settingsService.updateUnitFrom().subscribe();
    }
    if (this.settingsService.USPARTFROM !== this.settingsService.USPARTTO) {
      this.settingsService.USPARTFROM = this.settingsService.USPARTTO;
      this.settingsService.updatePartFrom().subscribe();
    }
  }

  updateUnitPartTo() {
    if (this.settingsService.USUNITTO !== this.settingsService.USUNITFROM) {
      this.settingsService.USUNITTO = this.settingsService.USUNITFROM;
      this.settingsService.updateUnitTo().subscribe();
    }
    if (this.settingsService.USPARTTO !== this.settingsService.USPARTFROM) {
      this.settingsService.USPARTTO = this.settingsService.USPARTFROM;
      this.settingsService.updatePartTo().subscribe();
    }
  }

  previousUnitPart() {
    if (this.settingsService.USPARTFROM > 1) {
      this.settingsService.USPARTFROM--;
      this.updateUnitPartTo();
      this.settingsService.updatePartFrom().subscribe();
    } else if (this.settingsService.USUNITFROM > 1) {
      this.settingsService.USUNITFROM--;
      this.settingsService.USPARTFROM = this.settingsService.parts.length;
      this.updateUnitPartTo();
      this.settingsService.updateUnitFrom().pipe(
        concatMap(_ => this.settingsService.updatePartFrom())
      ).subscribe();
    }
  }

  nextUnitPart() {
    if (this.settingsService.USPARTFROM < this.settingsService.parts.length) {
      this.settingsService.USPARTFROM++;
      this.updateUnitPartTo();
      this.settingsService.updatePartFrom().subscribe();
    } else if (this.settingsService.USUNITFROM > 1) {
      this.settingsService.USUNITFROM++;
      this.settingsService.USPARTFROM = 1;
      this.updateUnitPartTo();
      this.settingsService.updateUnitFrom().pipe(
        concatMap(_ => this.settingsService.updatePartFrom())
      ).subscribe();
    }
  }
}

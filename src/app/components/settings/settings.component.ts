import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
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

  unitToOn: boolean;

  constructor(private settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.getData().subscribe(_ => this.updateTextbook());
  }

  onLangChange(index) {
    this.settingsService.setSelectedLangIndex(index).subscribe();
    this.settingsService.updateLang().subscribe();
  }

  onDictOnlineChange(index) {
    this.settingsService.selectedDictOnlineIndex = index;
    this.settingsService.updateDictOnline().subscribe();
  }

  onDictNoteChange(index) {
    this.settingsService.selectedDictNoteIndex = index;
    this.settingsService.updateDictNote().subscribe();
  }

  onTextbookChange(index) {
    this.settingsService.selectedTextbookIndex = index;
    this.settingsService.updateTextbook().subscribe();
  }

  onUnitFromChange(index) {
  }

  onPartFromChange(index) {
  }

  onUnitToChange(value) {
  }

  onPartToChange(index) {
  }

  updateTextbook() {
    this.unitToOn = !this.settingsService.isSingleUnitPart;
    this.onUnitToChange(this.unitToOn);
  }
}

import { Component, OnInit } from '@angular/core';
import { SettingsListener, SettingsService } from '../../view-models/settings.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css', '../../common/common.css']
})
export class SettingsComponent implements OnInit, SettingsListener {

  get toTypeIsUnit() {
    return this.settingsService.toType === 0;
  }
  get toTypeIsPart() {
    return this.settingsService.toType === 1;
  }
  get toTypeIsTo() {
    return this.settingsService.toType === 2;
  }

  constructor(public settingsService: SettingsService) { }

  ngOnInit() {
    this.settingsService.settingsListener = this;
    this.settingsService.getData().subscribe();
  }

  onLangChange(index) {
    this.settingsService.setSelectedLang(this.settingsService.languages[index]).subscribe();
    this.settingsService.updateLang().subscribe();
  }

  onVoiceChange(index) {
    this.settingsService.selectedVoice = this.settingsService.voices[index];
    this.settingsService.updateVoice().subscribe();
  }

  onDictReferenceChange(index) {
    this.settingsService.selectedDictReference = this.settingsService.dictsReference[index];
    this.settingsService.updateDictReference().subscribe();
  }

  onDictNoteChange(index) {
    this.settingsService.selectedDictNote = this.settingsService.dictsNote[index];
    this.settingsService.updateDictNote().subscribe();
  }

  onDictTranslationChange(index) {
    this.settingsService.selectedDictTranslation = this.settingsService.dictsTranslation[index];
    this.settingsService.updateDictTranslation().subscribe();
  }

  onTextbookChange(index) {
    this.settingsService.selectedTextbook = this.settingsService.textbooks[index];
    this.settingsService.updateTextbook().subscribe();
  }

  onUnitFromChange(index) {
    this.settingsService.updateUnitFrom(this.settingsService.units[index].value).subscribe();
  }

  onPartFromChange(index) {
    this.settingsService.updatePartFrom(this.settingsService.parts[index].value).subscribe();
  }

  onToTypeChange(index) {
    this.settingsService.updateToType(this.settingsService.toTypes[index].value).subscribe();
  }

  previousUnitPart() {
    this.settingsService.previousUnitPart().subscribe();
  }

  nextUnitPart() {
    this.settingsService.nextUnitPart().subscribe();
  }

  onUnitToChange(index) {
    this.settingsService.updateUnitTo(this.settingsService.units[index].value).subscribe();
  }

  onPartToChange(index) {
    this.settingsService.updateUnitTo(this.settingsService.parts[index].value).subscribe();
  }

  onGetData(): void {
  }

  onUpdateDictReference(): void {
  }

  onUpdateDictNote(): void {
  }

  onUpdateDictTranslation(): void {
  }

  onUpdateLang(): void {
  }

  onUpdatePartFrom(): void {
  }

  onUpdatePartTo(): void {
  }

  onUpdateTextbook(): void {
  }

  onUpdateUnitFrom(): void {
  }

  onUpdateUnitTo(): void {
  }

  onUpdateVoice(): void {
  }
}

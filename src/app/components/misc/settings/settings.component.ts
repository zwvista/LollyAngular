import { Component, OnInit } from '@angular/core';
import { SettingsListener, SettingsService } from '../../../shared/view-models/misc/settings.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css', '../../../common.css']
})
export class SettingsComponent implements OnInit, SettingsListener {

  settingsService = container.resolve(SettingsService);

  get toTypeIsUnit() {
    return this.settingsService.toType === 0;
  }
  get toTypeIsPart() {
    return this.settingsService.toType === 1;
  }
  get toTypeIsTo() {
    return this.settingsService.toType === 2;
  }

  constructor() { }

  async ngOnInit() {
    this.settingsService.settingsListener = this;
    await this.settingsService.getData();
  }

  async onLangChange(index) {
    this.settingsService.selectedLang = this.settingsService.languages[index];
    await this.settingsService.updateLang();
  }

  async onVoiceChange(index) {
    this.settingsService.selectedVoice = this.settingsService.voices[index];
    await this.settingsService.updateVoice();
  }

  async onDictReferenceChange(index) {
    this.settingsService.selectedDictReference = this.settingsService.dictsReference[index];
    await this.settingsService.updateDictReference();
  }

  async onDictNoteChange(index) {
    this.settingsService.selectedDictNote = this.settingsService.dictsNote[index];
    await this.settingsService.updateDictNote();
  }

  async onDictTranslationChange(index) {
    this.settingsService.selectedDictTranslation = this.settingsService.dictsTranslation[index];
    await this.settingsService.updateDictTranslation();
  }

  async onTextbookChange(index) {
    this.settingsService.selectedTextbook = this.settingsService.textbooks[index];
    await this.settingsService.updateTextbook();
  }

  async onUnitFromChange(index) {
    await this.settingsService.updateUnitFrom(this.settingsService.units[index].value);
  }

  async onPartFromChange(index) {
    await this.settingsService.updatePartFrom(this.settingsService.parts[index].value);
  }

  async onToTypeChange(index) {
    await this.settingsService.updateToType(this.settingsService.toTypes[index].value);
  }

  async previousUnitPart() {
    await this.settingsService.previousUnitPart();
  }

  async nextUnitPart() {
    await this.settingsService.nextUnitPart();
  }

  async onUnitToChange(index) {
    await this.settingsService.updateUnitTo(this.settingsService.units[index].value);
  }

  async onPartToChange(index) {
    await this.settingsService.updateUnitTo(this.settingsService.parts[index].value);
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

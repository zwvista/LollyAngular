import { Component, OnInit } from '@angular/core';
import { SettingsListener, SettingsService } from '../../../shared/view-models/misc/settings.service';
import { container } from 'tsyringe';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css', '../../../common.css']
})
export class SettingsComponent implements OnInit, SettingsListener {

  settingsService: SettingsService = container.resolve(SettingsService);

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

  async onLangChange() {
    await this.settingsService.updateLang();
  }

  async onVoiceChange() {
    await this.settingsService.updateVoice();
  }

  async onDictReferenceChange() {
    await this.settingsService.updateDictReference();
  }

  async onDictNoteChange() {
    await this.settingsService.updateDictNote();
  }

  async onDictTranslationChange() {
    await this.settingsService.updateDictTranslation();
  }

  async onTextbookChange() {
    await this.settingsService.updateTextbook();
  }

  async onUnitFromChange() {
    await this.settingsService.updateUnitFrom(this.settingsService.USUNITFROM);
  }

  async onPartFromChange() {
    await this.settingsService.updatePartFrom(this.settingsService.USPARTFROM);
  }

  async onToTypeChange() {
    await this.settingsService.updateToType(this.settingsService.toType);
  }

  async previousUnitPart() {
    await this.settingsService.previousUnitPart();
  }

  async nextUnitPart() {
    await this.settingsService.nextUnitPart();
  }

  async onUnitToChange() {
    await this.settingsService.updateUnitTo(this.settingsService.USUNITTO);
  }

  async onPartToChange() {
    await this.settingsService.updateUnitTo(this.settingsService.USPARTTO);
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

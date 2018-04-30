import { Injectable } from '@angular/core';
import {LanguageService} from '../services/language.service';
import {UserSettingService} from '../services/user-setting.service';
import {UserSetting} from '../models/user-setting';
import {Language} from '../models/language';
import {DictNote, DictOnline} from '../models/dictionary';
import {Textbook} from '../models/textbook';
import {forkJoin} from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs/Observable';
import {DictNoteService, DictOnlineService} from '../services/dictionary.service';
import {TextbookService} from '../services/textbook.service';

const userid = 1;

@Injectable()
export class SettingsService {

  userSettings: UserSetting[];
  private selectedUSUserIndex: number;
  private get selectedUSUser(): UserSetting {
    return this.userSettings[this.selectedUSUserIndex];
  }
  private get USLANGID(): number {
    return this.selectedUSUser.VALUE1;
  }
  private set USLANGID(newValue: number) {
    this.selectedUSUser.VALUE1 = newValue;
  }
  private selectedUSLangIndex: number;
  private get selectedUSLang(): UserSetting {
    return this.userSettings[this.selectedUSLangIndex];
  }
  get USTEXTBOOKID(): number {
    return this.selectedUSLang.VALUE1;
  }
  set USTEXTBOOKID(newValue: number) {
    this.selectedUSLang.VALUE1 = newValue;
  }
  get USDICTONLINEID(): number {
    return this.selectedUSLang.VALUE2;
  }
  set USDICTONLINEID(newValue: number) {
    this.selectedUSLang.VALUE2 = newValue;
  }
  get USDICTNOTEID(): number {
    return this.selectedUSLang.VALUE3;
  }
  set USDICTNOTEID(newValue: number) {
    this.selectedUSLang.VALUE3 = newValue;
  }
  private selectedUSTextbookIndex: number;
  private get selectedUSTextbook(): UserSetting {
    return this.userSettings[this.selectedUSTextbookIndex];
  }
  get USUNITFROM(): number {
    return this.selectedUSTextbook.VALUE1;
  }
  set USUNITFROM(newValue: number) {
    this.selectedUSTextbook.VALUE1 = newValue;
  }
  get USPARTFROM(): number {
    return this.selectedUSTextbook.VALUE2;
  }
  set USPARTFROM(newValue: number) {
    this.selectedUSTextbook.VALUE2 = newValue;
  }
  get USUNITTO(): number {
    return this.selectedUSTextbook.VALUE3;
  }
  set USUNITTO(newValue: number) {
    this.selectedUSTextbook.VALUE3 = newValue;
  }
  get USPARTTO(): number {
    return this.selectedUSTextbook.VALUE4;
  }
  set USPARTTO(newValue: number) {
    this.selectedUSTextbook.VALUE4 = newValue;
  }
  get USUNITPARTFROM(): number {
    return this.USUNITFROM * 10 + this.USPARTFROM;
  }
  get USUNITPARTTO(): number {
    return this.USUNITTO * 10 + this.USPARTTO;
  }
  get isSingleUnitPart(): boolean {
    return this.USUNITPARTFROM === this.USUNITPARTTO;
  }
  get isInvalidUnitPart(): boolean {
    return this.USUNITPARTFROM > this.USUNITPARTTO;
  }

  languages: Language[];
  private selectedLangIndex: number;
  private get selectedLang(): Language {
    return this.languages[this.selectedLangIndex];
  }

  dictsOnline: DictOnline[];
  _selectedDictOnlineIndex: number;
  get selectedDictOnlineIndex() {
    return this._selectedDictOnlineIndex;
  }
  set selectedDictOnlineIndex(newValue: number) {
    this._selectedDictOnlineIndex = newValue;
    this.USDICTONLINEID = this.selectedDictOnline.ID;
  }
  private get selectedDictOnline(): DictOnline {
    return this.dictsOnline[this._selectedDictOnlineIndex];
  }

  dictsNote: DictNote[];
  _selectedDictNoteIndex: number;
  get selectedDictNoteIndex() {
    return this._selectedDictNoteIndex;
  }
  set selectedDictNoteIndex(newValue: number) {
    this._selectedDictNoteIndex = newValue;
    this.USDICTNOTEID = this.selectedDictNote.ID;
  }
  private get selectedDictNote(): DictNote {
    return this.dictsNote.length === 0 ? null : this.dictsNote[this._selectedDictNoteIndex];
  }

  textbooks: Textbook[];
  _selectedTextbookIndex: number;
  get selectedTextbookIndex() {
    return this._selectedTextbookIndex;
  }
  set selectedTextbookIndex(newValue: number) {
    this._selectedTextbookIndex = newValue;
    this.setSelectedTextbookIndex();
  }
  private get selectedTextbook(): Textbook {
    return this.textbooks[this._selectedTextbookIndex];
  }

  units: string[];
  parts: string[];

  constructor(private langService: LanguageService,
              private userSettingService: UserSettingService,
              private dictOnlineService: DictOnlineService,
              private dictNoteService: DictNoteService,
              private textbookService: TextbookService) { }

  getData(): Observable<void> {
    return forkJoin([this.langService.getData(), this.userSettingService.getDataByUser(userid)])
      .mergeMap(res => {
        this.languages = res[0];
        this.userSettings = res[1];
        this.selectedUSUserIndex = this.userSettings.findIndex(value => value.KIND === 1);
        return this.setSelectedLangIndex(this.languages.findIndex(value => value.ID === this.USLANGID));
      });
  }

  setSelectedLangIndex(langindex: number): Observable<void> {
    this.selectedLangIndex = langindex;
    this.USLANGID = this.selectedLang.ID;
    this.selectedUSLangIndex = this.userSettings.findIndex(value => value.KIND === 2 && value.ENTITYID === this.USLANGID);
    return forkJoin([this.dictOnlineService.getDataByLang(this.USLANGID),
    this.dictNoteService.getDataByLang(this.USLANGID), this.textbookService.getDataByLang(this.USLANGID)])
      .map(res => {
        this.dictsOnline = res[0];
        this.selectedDictOnlineIndex = this.dictsOnline.findIndex(value => value.ID === this.USDICTONLINEID);
        this.dictsNote = res[1];
        if (this.dictsNote.length === 0) {
          this.selectedDictNoteIndex = this.dictsNote.findIndex(value => value.ID === this.USDICTNOTEID);
        }
        this.textbooks = res[2];
        this.selectedTextbookIndex = this.textbooks.findIndex(value => value.ID === this.USTEXTBOOKID);
      });
  }

  setSelectedTextbookIndex() {

  }

}
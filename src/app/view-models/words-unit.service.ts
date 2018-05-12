import { Injectable } from '@angular/core';
import { UnitWordService } from '../services/unit-word.service';
import { SettingsService } from './settings.service';
import { UnitWord } from '../models/unit-word';
import { AppService } from './app.service';
import { Observable } from 'rxjs/Observable';
import { HtmlService } from '../services/html.service';
import { empty } from 'rxjs/observable/empty';

@Injectable()
export class WordsUnitService {

  unitWords: UnitWord[] = new Array(0);

  constructor(private unitWordService: UnitWordService,
              private settingsService: SettingsService,
              private appService: AppService,
              private htmlService: HtmlService) {
    appService.initializeComplete.subscribe(_ => this.getData());
  }

  getData() {
    if (this.appService.isInitialized) {
      this.unitWordService.getDataByTextbookUnitPart(this.settingsService.USTEXTBOOKID,
        this.settingsService.USUNITPARTFROM, this.settingsService.USUNITPARTTO)
        .subscribe(res => this.unitWords = res);
    }
  }

  create(item: UnitWord): Observable<number | any[]> {
    return this.unitWordService.create(item);
  }

  updateSeqNum(id: number, seqnum: number): Observable<number> {
    return this.unitWordService.updateSeqNum(id, seqnum);
  }

  updateNote(id: number, note: string): Observable<number> {
    return this.unitWordService.updateNote(id, note);
  }

  update(item: UnitWord): Observable<number> {
    return this.unitWordService.update(item);
  }

  delete(id: number): Observable<number> {
    return this.unitWordService.delete(id);
  }

  newUnitWord(): UnitWord {
    const o = new UnitWord();
    o.TEXTBOOKID = this.settingsService.USTEXTBOOKID;
    const maxElem = this.unitWords.reduce((p, v) => [p.UNIT, p.PART, p.SEQNUM] > [v.UNIT, v.PART, v.SEQNUM] ? p : v);
    o.UNIT = maxElem ? maxElem.UNIT : this.settingsService.USUNITTO;
    o.PART = maxElem ? maxElem.PART : this.settingsService.USPARTTO;
    o.SEQNUM = (maxElem ? maxElem.SEQNUM : 0) + 1;
    return o;
  }

  getNote(index: number): Observable<number> {
    const dictNote = this.settingsService.selectedDictNote;
    if (!dictNote) return empty();
    const item = this.unitWords[index];
    const url = dictNote.urlString(item.WORD);
    return this.htmlService.getHtml(url)
      .mergeMap(html => {
        console.log(html);
        item.NOTE = HtmlService.extractTextFrom(html, dictNote.TRANSFORM_MAC, '', (text, _) => text);
        return this.unitWordService.updateNote(item.ID, item.NOTE);
      });
  }
}

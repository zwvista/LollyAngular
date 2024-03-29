import { Injectable } from '@angular/core';
import { UnitWordService } from '../../services/wpp/unit-word.service';
import { SettingsService } from '../misc/settings.service';
import { MUnitWord } from '../../models/wpp/unit-word';
import { AppService } from '../misc/app.service';
import { EMPTY as empty, Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { LangWordService } from '../../services/wpp/lang-word.service';

@Injectable()
export class WordsUnitService {

  unitWords: MUnitWord[] = [];

  textbookWords: MUnitWord[] = [];
  textbookWordCount = 0;

  constructor(private unitWordService: UnitWordService,
              private langWordService: LangWordService,
              private settingsService: SettingsService,
              private appService: AppService) {
  }

  getDataInTextbook(filter: string, filterType: number): Observable<void> {
    return this.appService.initializeObject.pipe(
      concatMap(_ => this.unitWordService.getDataByTextbookUnitPart(this.settingsService.selectedTextbook,
        this.settingsService.USUNITPARTFROM, this.settingsService.USUNITPARTTO, filter, filterType)),
      map(res => {
        this.unitWords = res;
      }),
    );
  }

  getDataInLang(page: number, rows: number, filter: string, filterType: number, textbookFilter: number): Observable<void> {
    return this.appService.initializeObject.pipe(
      concatMap(_ => this.unitWordService.getDataByLang(this.settingsService.selectedLang.ID,
        this.settingsService.textbooks, page, rows, filter, filterType, textbookFilter)),
      map(res => {
        this.textbookWords = res.records;
        this.textbookWordCount = res.results;
      }),
    );
  }

  create(item: MUnitWord): Observable<number | any[]> {
    return this.unitWordService.create(item);
  }

  updateSeqNum(id: number, seqnum: number): Observable<number> {
    return this.unitWordService.updateSeqNum(id, seqnum);
  }

  updateNote(wordid: number, note: string): Observable<number> {
    return this.langWordService.updateNote(wordid, note);
  }

  update(item: MUnitWord): Observable<string> {
    return this.unitWordService.update(item);
  }

  delete(item: MUnitWord): Observable<string> {
    return this.unitWordService.delete(item);
  }

  reindex(onNext: (index: number) => void) {
    for (let i = 1; i <= this.unitWords.length; i++) {
      const item = this.unitWords[i - 1];
      if (item.SEQNUM === i) continue;
      item.SEQNUM = i;
      this.unitWordService.updateSeqNum(item.ID, item.SEQNUM).subscribe(_ => {
        onNext(i - 1);
      });
    }
  }

  newUnitWord(): MUnitWord {
    const o = new MUnitWord();
    o.LANGID = this.settingsService.selectedLang.ID;
    o.TEXTBOOKID = this.settingsService.USTEXTBOOK;
    const maxElem = this.unitWords.length === 0 ? null :
      this.unitWords.reduce((p, v) => p.unitPartSeqnum < v.unitPartSeqnum ? v : p);
    o.UNIT = maxElem ? maxElem.UNIT : this.settingsService.USUNITTO;
    o.PART = maxElem ? maxElem.PART : this.settingsService.USPARTTO;
    o.SEQNUM = (maxElem ? maxElem.SEQNUM : 0) + 1;
    o.textbook = this.settingsService.selectedTextbook;
    return o;
  }

  getNote(index: number): Observable<number> {
    const item = this.unitWords[index];
    return this.settingsService.getNote(item.WORD).pipe(
      concatMap(note => {
        item.NOTE = note;
        return this.updateNote(item.WORDID, note);
      }),
    );
  }

  getNotes(ifEmpty: boolean, oneComplete: (number) => void, allComplete: () => void) {
    this.settingsService.getNotes(this.unitWords.length,
      i => !ifEmpty || !this.unitWords[i],
      i => this.getNote(i).subscribe(_ => oneComplete(i)), allComplete);
  }
}

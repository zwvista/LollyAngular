import { Injectable } from '@angular/core';
import { LangWordService } from '../services/lang-word.service';
import { SettingsService } from './settings.service';
import { AppService } from './app.service';
import { NoteService } from './note.service';
import { concatMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UnitWordService } from '../services/unit-word.service';
import { MUnitWord } from '../models/unit-word';

@Injectable()
export class WordsTextbookService {

  textbookWords: MUnitWord[] = [];
  textbookWordCount = 0;

  constructor(private unitWordService: UnitWordService,
              private langWordService: LangWordService,
              private settingsService: SettingsService,
              private appService: AppService,
              private noteService: NoteService) {
  }

  getData(page: number, rows: number): Observable<void> {
    return this.appService.initializeComplete.pipe(
      concatMap(_ => this.unitWordService.getDataByLang(this.settingsService.selectedLang.ID,
        this.settingsService.textbooks, page, rows)),
      map(res => {
        this.settingsService.setColorStyle(res.VUNITWORDS);
        this.textbookWords = res.VUNITWORDS;
        this.textbookWordCount = res._results;
      }),
    );
  }

  updateNote(wordid: number, note: string): Observable<number> {
    return this.langWordService.updateNote(wordid, note);
  }

  getNote(index: number): Observable<number> {
    const item = this.textbookWords[index];
    return this.noteService.getNote(item.WORD).pipe(
      concatMap(note => {
        item.NOTE = note;
        return this.updateNote(item.WORDID, note);
      }),
    );
  }
}

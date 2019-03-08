import { Injectable } from '@angular/core';
import { LangWordService } from '../services/lang-word.service';
import { SettingsService } from './settings.service';
import { AppService } from './app.service';
import { NoteService } from './note.service';
import { TextbookWord, TextbookWords } from '../models/textbook-word';
import { TextbookWordService } from '../services/textbook-word.service';
import { concatMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class WordsTextbookService {

  textbookWords: TextbookWord[] = [];
  textbookWordCount = 0;

  constructor(private textbookWordService: TextbookWordService,
              private langWordService: LangWordService,
              private settingsService: SettingsService,
              private appService: AppService,
              private noteService: NoteService) {
  }

  getData(page: number, rows: number): Observable<void> {
    return this.appService.initializeComplete.pipe(
      concatMap(_ => this.textbookWordService.getDataByLang(this.settingsService.selectedLang.ID, page, rows)),
      map(res => {
        this.settingsService.setColorStyle(res.VTEXTBOOKWORDS);
        this.textbookWords = res.VTEXTBOOKWORDS;
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

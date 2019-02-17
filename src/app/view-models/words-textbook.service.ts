import { Injectable } from '@angular/core';
import { LangWordService } from '../services/lang-word.service';
import { SettingsService } from './settings.service';
import { AppService } from './app.service';
import { NoteService } from './note.service';
import { TextbookWord } from '../models/textbook-word';
import { TextbookWordService } from '../services/textbook-word.service';
import { concatMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class WordsTextbookService {

  textbookWords: TextbookWord[] = new Array(0);

  constructor(private textbookWordService: TextbookWordService,
              private langWordService: LangWordService,
              private settingsService: SettingsService,
              private appService: AppService,
              private noteService: NoteService) {
  }

  getData() {
    return this.appService.initializeComplete.pipe(
      concatMap(_ => this.textbookWordService.getDataByLang(this.settingsService.selectedLang.ID)),
      map(res => this.textbookWords = res),
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

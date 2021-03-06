import { Injectable } from '@angular/core';
import { SettingsService } from './settings.service';
import { EMPTY as empty, interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HtmlService } from '../services/misc/html.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private settingsService: SettingsService,
              private htmlService: HtmlService) { }

  getNote(word: string): Observable<string> {
    const dictNote = this.settingsService.selectedDictNote;
    if (!dictNote) return empty;
    const url = dictNote.urlString(word, this.settingsService.autoCorrects);
    return this.htmlService.getHtml(url).pipe(
      map(html => {
        console.log(html);
        return HtmlService.extractTextFrom(html, dictNote.TRANSFORM, '', (text, _) => text);
      }));
  }

  getNotes(wordCount: number, isNoteEmpty: (number) => boolean, getOne: (number) => void, allComplete: () => void) {
    const dictNote = this.settingsService.selectedDictNote;
    if (!dictNote) return;
    let i = 0;
    let subscription: Subscription;
    // https://stackoverflow.com/questions/50200859/i-dont-get-rxjs-6-with-angular-6-with-interval-switchmap-and-map
    subscription = interval(dictNote.WAIT).subscribe(_ => {
      while (i < wordCount && !isNoteEmpty(i))
        i++;
      if (i > wordCount) {
        allComplete();
        subscription.unsubscribe();
      } else {
        if (i < wordCount)
          getOne(i);
        i++;
      }
    });
  }
}

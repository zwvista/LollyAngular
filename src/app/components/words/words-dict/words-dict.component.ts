import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsUnitService } from '../../../view-models/wpp/words-unit.service';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { SelectItem } from 'primeng/api';
import { Location } from '@angular/common';
import { MDictionary } from '../../../models/misc/dictionary';
import { HtmlService } from '../../../services/misc/html.service';
import { WordsLangService } from '../../../view-models/wpp/words-lang.service';
import { container } from 'tsyringe';
import { AppService } from '../../../view-models/misc/app.service';

@Component({
  selector: 'app-words-dict',
  templateUrl: './words-dict.component.html',
  styleUrls: ['./words-dict.component.css']
})
export class WordsDictComponent implements OnInit {

  wordsUnitService = container.resolve(WordsUnitService);
  wordsLangService = container.resolve(WordsLangService);
  settingsService = container.resolve(SettingsService);
  htmlService = container.resolve(HtmlService);
  words: SelectItem[];
  selectedWord: string;
  dictUrl = 'about:blank';
  dictSrc = null;
  selectedDictReference: MDictionary;

  constructor(private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const dictType = this.route.snapshot.paramMap.get('type');
    this.words =
      dictType === 'unit' ? this.wordsUnitService.unitWords.map(v  => ({label: v.WORD, value: v.WORD})) :
      dictType === 'textbook' ? this.wordsUnitService.textbookWords.map(v  => ({label: v.WORD, value: v.WORD})) :
      this.wordsLangService.langWords.map(v  => ({label: v.WORD, value: v.WORD}));
    this.selectedWord = this.words[+this.route.snapshot.paramMap.get('index')].value;
    this.selectedDictReference = this.settingsService.selectedDictReference;
    if (this.selectedWord) this.refreshDict();
  }

  goBack(): void {
    this.location.back();
  }

  async refreshDict() {
    const item = this.selectedDictReference;
    const url = item.urlString(this.selectedWord, this.settingsService.autoCorrects);
    if (item.DICTTYPENAME === 'OFFLINE') {
      this.dictUrl = 'about:blank';
      const html = await this.htmlService.getHtml(url);
      this.dictSrc = item.htmlString(html, this.selectedWord)
        .replace(/\n/g, ' ').replace(/"/g, '&quot;');
      console.log(this.dictSrc);
    } else {
      this.dictSrc = null;
      this.dictUrl = url;
    }
  }

  onload(event: Event) {
    const iFrame = event.target as HTMLIFrameElement;
    console.log(iFrame);
    const iFrameBody = iFrame.contentWindow.document.body.innerHTML;
    // if ( iFrame.contentDocument ) { // FF
    //   iFrameBody = iFrame.contentDocument.getElementsByTagName('body')[0];
    // } else if ( iFrame.contentWindow ) { // IE
    //   iFrameBody = iFrame.contentWindow.document.getElementsByTagName('body')[0];
    // }
    console.log(iFrameBody);
  }
}

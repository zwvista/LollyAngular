import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { SettingsService } from '../../view-models/settings.service';
import { SelectItem } from 'primeng/api';
import { Location } from '@angular/common';
import { DictGroup, DictMean } from '../../models/dictionary';
import { HtmlService } from '../../services/html.service';
import { WordsTextbookService } from '../../view-models/words-textbook.service';
import { WordsLangService } from '../../view-models/words-lang.service';

@Component({
  selector: 'app-words-dict',
  templateUrl: './words-dict.component.html',
  styleUrls: ['./words-dict.component.css']
})
export class WordsDictComponent implements OnInit {

  words: SelectItem[];
  selectedWord: string;
  dictUrl = 'about:blank';
  dictSrc = null;
  selectedDictGroup: DictGroup;

  constructor(private wordsUnitService: WordsUnitService,
              private wordsTextbookService: WordsTextbookService,
              private wordsLangService: WordsLangService,
              private settingsService: SettingsService,
              private htmlService: HtmlService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const dictType = this.route.snapshot.paramMap.get('type');
    this.words =
      dictType === 'unit' ? this.wordsUnitService.unitWords.map(v  => ({label: v.WORD, value: v.WORD})) :
      dictType === 'textbook' ? this.wordsTextbookService.textbookWords.map(v  => ({label: v.WORD, value: v.WORD})) :
      this.wordsLangService.langWords.map(v  => ({label: v.WORD, value: v.WORD}));
    this.selectedWord = this.words[+this.route.snapshot.paramMap.get('index')].value;
    this.selectedDictGroup = this.settingsService.selectedDictGroup;
    if (this.selectedWord) this.refreshDict();
  }

  goBack(): void {
    this.location.back();
  }

  refreshDict() {
    const item = this.selectedDictGroup;
    if (item.DICTNAME.startsWith('Custom'))
      this.dictSrc = this.settingsService.dictHtml(this.selectedWord, item.dictids());
    else {
      const item2 = this.settingsService.dictsMean.find(v => v.DICTNAME === item.DICTNAME);
      const url = item2.urlString(this.selectedWord, this.settingsService.autoCorrects);
      if (item2.DICTTYPENAME === 'OFFLINE') {
        this.dictUrl = 'about:blank';
        this.htmlService.getHtml(url).subscribe(html => {
          this.dictSrc = item2.htmlString(html, this.selectedWord)
            .replace(/\n/g, ' ').replace(/"/g, '&quot;');
          console.log(this.dictSrc);
        });
      } else {
        this.dictSrc = null;
        this.dictUrl = url;
      }
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

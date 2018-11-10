import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { SettingsService } from '../../view-models/settings.service';
import { SelectItem } from 'primeng/api';
import { Location } from '@angular/common';
import { DictOnline } from '../../models/dictionary';
import { HtmlService } from '../../services/html.service';

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
  selectedDictOnline: DictOnline;

  constructor(private wordsUnitService: WordsUnitService,
              public settingsService: SettingsService,
              private htmlService: HtmlService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    this.words = this.wordsUnitService.unitWords.map(v  => ({label: v.WORD, value: v.WORD}));
    this.selectedWord = this.words[+this.route.snapshot.paramMap.get('index')].value;
    this.selectedDictOnline = this.settingsService.selectedDictOnline;
    if (this.selectedWord) this.refreshDict();
  }

  goBack(): void {
    this.location.back();
  }

  refreshDict() {
    const url = this.selectedDictOnline.urlString(this.selectedWord, this.settingsService.autoCorrects);
    if (this.selectedDictOnline.DICTTYPENAME === 'OFFLINE') {
      this.dictUrl = 'about:blank';
      this.htmlService.getHtml(url).subscribe(html => {
        this.dictSrc = this.selectedDictOnline.htmlString(html, this.selectedWord)
          .replace(/\n/g, ' ').replace(/"/g, '&quot;');
        console.log(this.dictSrc);
      });
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

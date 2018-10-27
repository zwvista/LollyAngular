import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordsUnitService } from '../../view-models/words-unit.service';
import { SettingsService } from '../../view-models/settings.service';
import { SelectItem } from 'primeng/api';
import { Location } from '@angular/common';
import { DictOnline } from '../../models/dictionary';

@Component({
  selector: 'app-words-dict',
  templateUrl: './words-dict.component.html',
  styleUrls: ['./words-dict.component.css']
})
export class WordsDictComponent implements OnInit {

  words: SelectItem[];
  selectedWord: string;
  dictUrl = 'about:blank';
  selectedDictOnline: DictOnline;

  constructor(private wordsUnitService: WordsUnitService,
              public settingsService: SettingsService,
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
    this.dictUrl = this.selectedDictOnline.urlString(this.selectedWord, this.settingsService.autoCorrects);
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

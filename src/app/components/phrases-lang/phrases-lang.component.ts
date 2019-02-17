import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';
import { googleString } from '../../common/common';

@Component({
  selector: 'app-phrases-lang',
  templateUrl: './phrases-lang.component.html',
  styleUrls: ['./phrases-lang.component.css', '../../common/common.css']
})
export class PhrasesLangComponent implements OnInit {

  constructor(private phrasesLangService: PhrasesLangService) { }

  ngOnInit() {
    this.phrasesLangService.getData().subscribe();
  }

  deletePhrase(index: number) {
    console.log(index);
  }

  googlePhrase(phrase: string) {
    googleString(phrase);
  }

}

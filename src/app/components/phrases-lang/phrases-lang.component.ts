import { Component, OnInit } from '@angular/core';
import { PhrasesLangService } from '../../view-models/phrases-lang.service';

@Component({
  selector: 'app-phrases-lang',
  templateUrl: './phrases-lang.component.html',
  styleUrls: ['./phrases-lang.component.css', '../../common/common.css']
})
export class PhrasesLangComponent implements OnInit {

  constructor(public phrasesLangService: PhrasesLangService) { }

  ngOnInit() {
    this.phrasesLangService.getData().subscribe();
  }

  deletePhrase(index: number) {
    console.log(index);
  }

  // https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab
  googlePhrase(PHRASE: string) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(PHRASE), '_blank');
  }

}

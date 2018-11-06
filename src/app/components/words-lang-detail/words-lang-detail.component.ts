import { Component, OnInit } from '@angular/core';
import { LangWord } from '../../models/lang-word';
import { WordsLangService } from '../../view-models/words-lang.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-words-lang-detail',
  templateUrl: './words-lang-detail.component.html',
  styleUrls: ['./words-lang-detail.component.css', '../../common/common.css']
})
export class WordsLangDetailComponent implements OnInit {

  langWord: LangWord;

  constructor(private wordsLangService: WordsLangService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.wordsLangService.langWords.find(value => value.ID === id);
    this.langWord = o ? {...o} as LangWord : this.wordsLangService.newLangWord();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.langWord.ID) {
      this.wordsLangService.update(this.langWord).subscribe(_ => this.goBack());
    } else {
      this.wordsLangService.create(this.langWord).subscribe(_ => this.goBack());
    }
  }

}

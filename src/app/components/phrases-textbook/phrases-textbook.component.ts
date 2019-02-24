import { Component, OnInit } from '@angular/core';
import { PhrasesTextbookService } from '../../view-models/phrases-textbook.service';
import { WordsTextbookService } from '../../view-models/words-textbook.service';
import { SettingsService } from '../../view-models/settings.service';

@Component({
  selector: 'app-phrases-textbook',
  templateUrl: './phrases-textbook.component.html',
  styleUrls: ['./phrases-textbook.component.css', '../../common/common.css']
})
export class PhrasesTextbookComponent implements OnInit {

  constructor(private phrasesTextbookService: PhrasesTextbookService,
              private settingsService: SettingsService) { }

  rows = this.settingsService.USROWSPERPAGE;

  ngOnInit() {
    this.phrasesTextbookService.getData(1,  this.rows).subscribe();
  }

  paginate(event) {
    this.rows = event.rows;
    this.phrasesTextbookService.getData(event.page + 1, this.rows).subscribe();
  }

}

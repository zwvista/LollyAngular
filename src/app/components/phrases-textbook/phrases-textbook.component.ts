import { Component, OnInit } from '@angular/core';
import { PhrasesTextbookService } from '../../view-models/phrases-textbook.service';

@Component({
  selector: 'app-phrases-textbook',
  templateUrl: './phrases-textbook.component.html',
  styleUrls: ['./phrases-textbook.component.css', '../../common/common.css']
})
export class PhrasesTextbookComponent implements OnInit {

  constructor(public phrasesTextbookService: PhrasesTextbookService) { }

  ngOnInit() {
    this.phrasesTextbookService.getData().subscribe();
  }

}

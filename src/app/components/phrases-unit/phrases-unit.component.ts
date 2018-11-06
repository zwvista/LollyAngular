import { Component, OnInit } from '@angular/core';
import { PhrasesUnitService } from '../../view-models/phrases-unit.service';
import { UnitWord } from '../../models/unit-word';
import { UnitPhrase } from '../../models/unit-phrase';

@Component({
  selector: 'app-phrases-unit',
  templateUrl: './phrases-unit.component.html',
  styleUrls: ['./phrases-unit.component.css', '../../common/common.css']
})
export class PhrasesUnitComponent implements OnInit {

  constructor(public phrasesUnitService: PhrasesUnitService) { }

  ngOnInit() {
    this.phrasesUnitService.getData().subscribe();
  }

  onReorder(from: number, to: number) {
    console.log(`${from},${to}`);
    this.phrasesUnitService.reindex(index => {});
  }

  deletePhrase(index: number) {
    console.log(index);
  }

  // https://stackoverflow.com/questions/42775017/angular-2-redirect-to-an-external-url-and-open-in-a-new-tab
  googlePhrase(PHRASE: string) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(PHRASE), '_blank');
  }

}

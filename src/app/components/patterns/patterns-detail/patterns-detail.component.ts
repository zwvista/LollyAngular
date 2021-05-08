import { Component, OnInit } from '@angular/core';
import { MLangPhrase } from '../../../models/wpp/lang-phrase';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatternsService } from '../../../view-models/wpp/patterns.service';
import { MPattern } from '../../../models/wpp/pattern';

@Component({
  selector: 'app-patterns-detail',
  templateUrl: './patterns-detail.component.html',
  styleUrls: ['./patterns-detail.component.css']
})
export class PatternsDetailComponent implements OnInit {

  item: MPattern;

  constructor(private patternsService: PatternsService,
              private settingsService: SettingsService,
              private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.patternsService.patterns.find(value => value.ID === id);
    this.item = o ? {...o} as MPattern : this.patternsService.newPattern();
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.item.PATTERN = this.settingsService.autoCorrectInput(this.item.PATTERN);
    if (this.item.ID) {
      this.patternsService.update(this.item).subscribe(_ => this.goBack());
    } else {
      this.patternsService.create(this.item).subscribe(_ => this.goBack());
    }
  }

}

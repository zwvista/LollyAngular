import { Component, OnInit } from '@angular/core';
import { MLangPhrase } from '../../../models/wpp/lang-phrase';
import { SettingsService } from '../../../view-models/misc/settings.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PatternsService } from '../../../view-models/wpp/patterns.service';
import { MPattern } from '../../../models/wpp/pattern';
import { container } from 'tsyringe';

@Component({
  selector: 'app-patterns-detail',
  templateUrl: './patterns-detail.component.html',
  styleUrls: ['./patterns-detail.component.css']
})
export class PatternsDetailComponent implements OnInit {

  patternsService = container.resolve(PatternsService);
  settingsService = container.resolve(SettingsService);
  item: MPattern;

  constructor(private route: ActivatedRoute,
              private location: Location
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const o = this.patternsService.patterns.find(value => value.ID === id);
    this.item = o ? {...o} as MPattern : this.patternsService.newPattern();
  }

  goBack() {
    this.location.back();
  }

  async save() {
    this.item.PATTERN = this.settingsService.autoCorrectInput(this.item.PATTERN);
    await (this.item.ID ? this.patternsService.update(this.item) : this.patternsService.create(this.item));
    this.goBack()
  }
}

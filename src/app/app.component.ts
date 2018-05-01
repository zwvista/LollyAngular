import { Component, OnInit } from '@angular/core';
import {SettingsService} from './view-models/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lolly Angular';

  constructor() { }

  ngOnInit() {
  }

}

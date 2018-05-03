import { Component, OnInit } from '@angular/core';
import { AppService } from './view-models/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lolly Angular';

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}

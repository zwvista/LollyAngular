import { Component, OnInit } from '@angular/core';
import { AppService } from './view-models/app.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lolly Angular';
  items: MenuItem[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.items = [
      {label: 'Words in Unit', icon: 'fa-book', routerLink: '/words-unit'},
      {label: 'Phrases in Unit', icon: 'fa-book', routerLink: '/phrases-unit'},
      {label: 'Settings', icon: 'fa-book', routerLink: 'settings'},
    ];
  }

}

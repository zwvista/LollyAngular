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
  items: MenuItem[] = [
    {label: 'Words in Unit', icon: 'fa fa-fw fa-bus', routerLink: 'words-unit'},
    {label: 'Phrases in Unit', icon: 'fa fa-fw fa-plane', routerLink: 'phrases-unit'},
    {label: 'Words in Language', icon: 'fa fa-fw fa-bus', routerLink: 'words-lang'},
    {label: 'Phrases in Language', icon: 'fa fa-fw fa-plane', routerLink: 'phrases-lang'},
    {label: 'Settings', icon: 'fa fa-fw fa-gear', routerLink: 'settings'},
  ];
  tabLinks: {label: string, link: string}[] = [
    {label: 'Words in Unit', link: 'words-unit'},
    {label: 'Phrases in Unit', link: 'phrases-unit'},
    {label: 'Words in Language', link: 'words-lang'},
    {label: 'Phrases in Language', link: 'phrases-lang'},
    {label: 'Settings', link: 'settings'},
  ];

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

}

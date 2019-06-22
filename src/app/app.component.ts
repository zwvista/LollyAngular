import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from './view-models/app.service';
import { MenuItem } from 'primeng/api';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lolly Angular';
  itemsApp: MenuItem[] = [
    {label: 'App1', icon: 'fa fa-fw fa-dollar', command: event => this.handleChange(event)},
    {label: 'App2', icon: 'fa fa-fw fa-euro', command: event => this.handleChange(event)},
  ];
  activeItemApp = this.itemsApp[0];
  items: MenuItem[] = [
    {label: 'Words in Unit', icon: 'fa fa-fw fa-bus', routerLink: '/words-unit'},
    {label: 'Phrases in Unit', icon: 'fa fa-fw fa-train', routerLink: '/phrases-unit'},
    {label: 'Words in Language', icon: 'fa fa-fw fa-plane', routerLink: '/words-lang'},
    {label: 'Phrases in Language', icon: 'fa fa-fw fa-rocket', routerLink: '/phrases-lang'},
    {label: 'Words in Textbook', icon: 'fa fa-fw fa-car', routerLink: '/words-textbook'},
    {label: 'Phrases in Textbook', icon: 'fa fa-fw fa-taxi', routerLink: '/phrases-textbook'},
    {label: 'Settings', icon: 'fa fa-fw fa-gear', routerLink: '/settings'},
  ];
  tabLinks: MenuItem[] = [
    {label: 'Words in Unit', icon: 'fa-bus', routerLink: '/words-unit2'},
    {label: 'Phrases in Unit', icon: 'fa-train', routerLink: '/phrases-unit2'},
    {label: 'Words in Language', icon: 'fa-plane', routerLink: '/words-lang2'},
    {label: 'Phrases in Language', icon: 'fa-rocket', routerLink: '/phrases-lang2'},
    {label: 'Words in Textbook', icon: 'fa-car', routerLink: '/words-textbook2'},
    {label: 'Phrases in Textbook', icon: 'fa-taxi', routerLink: '/phrases-textbook2'},
    {label: 'Settings', icon: 'fa-gear', routerLink: '/settings'},
  ];

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
  }

  handleChange(event) {
    let index = this.activeItemApp === this.itemsApp[0] ?
      this.items.findIndex(v => this.router.url.endsWith(v.routerLink)) :
      this.tabLinks.findIndex(v => this.router.url.endsWith(v.routerLink));
    if (index === -1) index = 0;
    this.activeItemApp = event.item;
    this.router.navigateByUrl(this.activeItemApp === this.itemsApp[0] ?
      this.items[index].routerLink : this.tabLinks[index].routerLink
    );
  }
}

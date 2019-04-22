import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AppService } from './view-models/app.service';
import { MenuItem } from 'primeng/api';
import { detectChanges } from '@angular/core/src/render3';
import { MatTabChangeEvent } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Lolly Angular';
  itemsApp: MenuItem[] = [
    {label: 'App1', icon: 'fa fa-fw fa-bus', command: event => this.handleChange(event)},
    {label: 'App2', icon: 'fa fa-fw fa-bus', command: event => this.handleChange(event)},
  ];
  activeItemApp = this.itemsApp[0];
  items: MenuItem[] = [
    {label: 'Words in Unit', icon: 'fa fa-fw fa-bus', routerLink: '/words-unit'},
    {label: 'Phrases in Unit', icon: 'fa fa-fw fa-bus', routerLink: '/phrases-unit'},
    {label: 'Words in Language', icon: 'fa fa-fw fa-plane', routerLink: '/words-lang'},
    {label: 'Phrases in Language', icon: 'fa fa-fw fa-plane', routerLink: '/phrases-lang'},
    {label: 'Words in Textbook', icon: 'fa fa-fw fa-taxi', routerLink: '/words-textbook'},
    {label: 'Phrases in Textbook', icon: 'fa fa-fw fa-taxi', routerLink: '/phrases-textbook'},
    {label: 'Settings', icon: 'fa fa-fw fa-gear', routerLink: '/settings'},
  ];
  tabLinks: {label: string, link: string}[] = [
    {label: 'Words in Unit', link: '/words-unit2'},
    {label: 'Phrases in Unit', link: '/phrases-unit2'},
    {label: 'Words in Language', link: '/words-lang2'},
    {label: 'Phrases in Language', link: '/phrases-lang2'},
    {label: 'Words in Textbook', link: '/words-textbook2'},
    {label: 'Phrases in Textbook', link: '/phrases-textbook2'},
    {label: 'Settings', link: '/settings'},
  ];

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
  }

  handleChange(event) {
    let index = this.activeItemApp === this.itemsApp[0] ?
      this.items.findIndex(v => this.router.url.endsWith(v.routerLink)) :
      this.tabLinks.findIndex(v => this.router.url.endsWith(v.link));
    if (index === -1) index = 0;
    this.activeItemApp = event.item;
    this.router.navigateByUrl(this.activeItemApp === this.itemsApp[0] ?
      this.items[index].routerLink : this.tabLinks[index].link
    );
  }
}

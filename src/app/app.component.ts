import { Component, OnInit } from '@angular/core';
import { AppService } from './view-models/misc/app.service';
import { MenuItem } from 'primeng/api';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { container } from 'tsyringe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appService = container.resolve(AppService);
  title = 'Lolly Angular';
  itemsApp: MenuItem[] = [
    {label: 'App1', icon: 'fa fa-dollar-sign', command: event => this.handleChange(event)},
    {label: 'App2', icon: 'fa fa-euro-sign', command: event => this.handleChange(event)},
  ];
  activeItemApp = this.itemsApp[0];
  items: MenuItem[] = [
    {label: 'Words in Unit', icon: 'fa fa-bus', routerLink: '/words-unit'},
    {label: 'Phrases in Unit', icon: 'fa fa-train', routerLink: '/phrases-unit'},
    {label: 'Words in Textbook', icon: 'fa fa-car', routerLink: '/words-textbook'},
    {label: 'Phrases in Textbook', icon: 'fa fa-taxi', routerLink: '/phrases-textbook'},
    {label: 'Words in Language', icon: 'fa fa-plane', routerLink: '/words-lang'},
    {label: 'Phrases in Language', icon: 'fa fa-rocket', routerLink: '/phrases-lang'},
    {label: 'Patterns in Language', icon: 'fa fa-motorcycle', routerLink: '/patterns'},
    {label: 'Settings', icon: 'fa fa-gear', routerLink: '/settings'},
  ];
  tabLinks: MenuItem[] = [
    {label: 'Words in Unit', icon: 'fa-bus', routerLink: '/words-unit2'},
    {label: 'Phrases in Unit', icon: 'fa-train', routerLink: '/phrases-unit2'},
    {label: 'Words in Textbook', icon: 'fa-car', routerLink: '/words-textbook2'},
    {label: 'Phrases in Textbook', icon: 'fa-taxi', routerLink: '/phrases-textbook2'},
    {label: 'Words in Language', icon: 'fa-plane', routerLink: '/words-lang2'},
    {label: 'Phrases in Language', icon: 'fa-rocket', routerLink: '/phrases-lang2'},
    {label: 'Patterns in Language', icon: 'fa-motorcycle', routerLink: '/patterns2'},
    {label: 'Settings', icon: 'fa-gear', routerLink: '/settings'},
  ];
  // https://stackoverflow.com/questions/62095354/angular-login-page
  isLoginPage: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isLoginPage = this.router.url === '/login';
      if (!this.isLoginPage)
        this.appService.getData();
    });
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

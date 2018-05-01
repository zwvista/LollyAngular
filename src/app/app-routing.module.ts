import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WordsUnitComponent} from './components/words-unit/words-unit.component';
import {SettingsComponent} from './components/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/words-unit', pathMatch: 'full' },
  { path: 'words-unit', component: WordsUnitComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

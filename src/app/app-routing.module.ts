import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsUnitComponent } from './components/words-unit/words-unit.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PhrasesUnitComponent } from './components/phrases-unit/phrases-unit.component';
import { PhrasesUnitDetailComponent } from './components/phrases-unit-detail/phrases-unit-detail.component';
import { WordsUnitDetailComponent } from './components/words-unit-detail/words-unit-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/words-unit', pathMatch: 'full' },
  { path: 'phrases-unit', component: PhrasesUnitComponent },
  { path: 'phrases-unit-detail/:id', component: PhrasesUnitDetailComponent },
  { path: 'words-unit', component: WordsUnitComponent },
  { path: 'words-unit-detail/:id', component: WordsUnitDetailComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

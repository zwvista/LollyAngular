import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordsUnitComponent } from './components/words-unit/words-unit.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PhrasesUnitComponent } from './components/phrases-unit/phrases-unit.component';
import { PhrasesUnitDetailComponent } from './components/phrases-unit-detail/phrases-unit-detail.component';
import { WordsUnitDetailComponent } from './components/words-unit-detail/words-unit-detail.component';
import { WordsDictComponent } from './components/words-dict/words-dict.component';
import { WordsLangDetailComponent } from './components/words-lang-detail/words-lang-detail.component';
import { WordsLangComponent } from './components/words-lang/words-lang.component';
import { PhrasesLangComponent } from './components/phrases-lang/phrases-lang.component';
import { PhrasesLangDetailComponent } from './components/phrases-lang-detail/phrases-lang-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/words-unit', pathMatch: 'full' },
  { path: 'phrases-unit', component: PhrasesUnitComponent },
  { path: 'phrases-unit-detail/:id', component: PhrasesUnitDetailComponent },
  { path: 'words-unit', component: WordsUnitComponent },
  { path: 'words-unit-detail/:id', component: WordsUnitDetailComponent },
  { path: 'phrases-lang', component: PhrasesLangComponent },
  { path: 'phrases-lang-detail/:id', component: PhrasesLangDetailComponent },
  { path: 'words-lang', component: WordsLangComponent },
  { path: 'words-lang-detail/:id', component: WordsLangDetailComponent },
  { path: 'words-dict/:index', component: WordsDictComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

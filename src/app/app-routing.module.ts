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
import { WordsTextbookComponent } from './components/words-textbook/words-textbook.component';
import { PhrasesTextbookComponent } from './components/phrases-textbook/phrases-textbook.component';
import { WordsTextbookDetailComponent } from './components/words-textbook-detail/words-textbook-detail.component';
import { PhrasesTextbookDetailComponent } from './components/phrases-textbook-detail/phrases-textbook-detail.component';
import { WordsUnit2Component } from './components/words-unit2/words-unit2.component';
import { WordsTextbook2Component } from './components/words-textbook2/words-textbook2.component';
import { PhrasesTextbook2Component } from './components/phrases-textbook2/phrases-textbook2.component';
import { WordsLang2Component } from './components/words-lang2/words-lang2.component';
import { PhrasesUnit2Component } from './components/phrases-unit2/phrases-unit2.component';
import { PhrasesLang2Component } from './components/phrases-lang2/phrases-lang2.component';

const routes: Routes = [
  { path: '', redirectTo: 'words-unit', pathMatch: 'full' },
  { path: 'words-unit', component: WordsUnitComponent },
  { path: 'words-unit2', component: WordsUnit2Component },
  { path: 'words-unit-detail/:id', component: WordsUnitDetailComponent },
  { path: 'words-textbook', component: WordsTextbookComponent },
  { path: 'words-textbook2', component: WordsTextbook2Component },
  { path: 'words-textbook-detail/:id', component: WordsTextbookDetailComponent },
  { path: 'words-lang', component: WordsLangComponent },
  { path: 'words-lang2', component: WordsLang2Component },
  { path: 'words-lang-detail/:id', component: WordsLangDetailComponent },
  { path: 'phrases-unit', component: PhrasesUnitComponent },
  { path: 'phrases-unit2', component: PhrasesUnit2Component },
  { path: 'phrases-unit-detail/:id', component: PhrasesUnitDetailComponent },
  { path: 'phrases-textbook', component: PhrasesTextbookComponent },
  { path: 'phrases-textbook2', component: PhrasesTextbook2Component },
  { path: 'phrases-textbook-detail/:id', component: PhrasesTextbookDetailComponent },
  { path: 'phrases-lang', component: PhrasesLangComponent },
  { path: 'phrases-lang2', component: PhrasesLang2Component },
  { path: 'phrases-lang-detail/:id', component: PhrasesLangDetailComponent },
  { path: 'words-dict/:type/:index', component: WordsDictComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule { }

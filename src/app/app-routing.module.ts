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
import { PatternsComponent } from './components/patterns/patterns.component';
import { Patterns2Component } from './components/patterns2/patterns2.component';
import { PatternsDetailComponent } from './components/patterns-detail/patterns-detail.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'words-unit', pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'words-unit', component: WordsUnitComponent, canActivate: [AuthGuard] },
  { path: 'words-unit2', component: WordsUnit2Component, canActivate: [AuthGuard] },
  { path: 'words-unit-detail/:id', component: WordsUnitDetailComponent, canActivate: [AuthGuard] },
  { path: 'words-textbook', component: WordsTextbookComponent, canActivate: [AuthGuard] },
  { path: 'words-textbook2', component: WordsTextbook2Component, canActivate: [AuthGuard] },
  { path: 'words-textbook-detail/:id', component: WordsTextbookDetailComponent, canActivate: [AuthGuard] },
  { path: 'words-lang', component: WordsLangComponent, canActivate: [AuthGuard] },
  { path: 'words-lang2', component: WordsLang2Component, canActivate: [AuthGuard] },
  { path: 'words-lang-detail/:id', component: WordsLangDetailComponent, canActivate: [AuthGuard] },
  { path: 'phrases-unit', component: PhrasesUnitComponent, canActivate: [AuthGuard] },
  { path: 'phrases-unit2', component: PhrasesUnit2Component, canActivate: [AuthGuard] },
  { path: 'phrases-unit-detail/:id', component: PhrasesUnitDetailComponent, canActivate: [AuthGuard] },
  { path: 'phrases-textbook', component: PhrasesTextbookComponent, canActivate: [AuthGuard] },
  { path: 'phrases-textbook2', component: PhrasesTextbook2Component, canActivate: [AuthGuard] },
  { path: 'phrases-textbook-detail/:id', component: PhrasesTextbookDetailComponent, canActivate: [AuthGuard] },
  { path: 'phrases-lang', component: PhrasesLangComponent, canActivate: [AuthGuard] },
  { path: 'phrases-lang2', component: PhrasesLang2Component, canActivate: [AuthGuard] },
  { path: 'phrases-lang-detail/:id', component: PhrasesLangDetailComponent, canActivate: [AuthGuard] },
  { path: 'patterns', component: PatternsComponent, canActivate: [AuthGuard] },
  { path: 'patterns2', component: Patterns2Component, canActivate: [AuthGuard] },
  { path: 'patterns-detail/:id', component: PatternsDetailComponent, canActivate: [AuthGuard] },
  { path: 'words-dict/:type/:index', component: WordsDictComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  providers: [AuthGuard],
})
export class AppRoutingModule { }

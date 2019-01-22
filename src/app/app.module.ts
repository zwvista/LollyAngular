import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Material
import { MatTabsModule } from '@angular/material/tabs';
// PrimeNG
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/primeng';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
// 3rd-party
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { WordsUnitComponent } from './components/words-unit/words-unit.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { DictNoteService, DictWordService } from './services/dictionary.service';
import { LanguageService } from './services/language.service';
import { TextbookService } from './services/textbook.service';
import { UnitWordService } from './services/unit-word.service';
import { UserSettingService } from './services/user-setting.service';
import { SettingsService } from './view-models/settings.service';
import { WordsUnitService } from './view-models/words-unit.service';
import { FormsModule } from '@angular/forms';
import { AppService } from './view-models/app.service';
import { PhrasesUnitComponent } from './components/phrases-unit/phrases-unit.component';
import { PhrasesUnitService } from './view-models/phrases-unit.service';
import { UnitPhraseService } from './services/unit-phrase.service';
import { AutoCorrectService } from './services/autocorrect.service';
import { WordsUnitDetailComponent } from './components/words-unit-detail/words-unit-detail.component';
import { PhrasesUnitDetailComponent } from './components/phrases-unit-detail/phrases-unit-detail.component';
import { HtmlService } from './services/html.service';
import { WordsDictComponent } from './components/words-dict/words-dict.component';
import { DictBrowserComponent } from './components/dict-browser/dict-browser.component';
import { PhrasesLangComponent } from './components/phrases-lang/phrases-lang.component';
import { PhrasesLangDetailComponent } from './components/phrases-lang-detail/phrases-lang-detail.component';
import { WordsLangComponent } from './components/words-lang/words-lang.component';
import { WordsLangDetailComponent } from './components/words-lang-detail/words-lang-detail.component';
import { LangPhraseService } from './services/lang-phrase.service';
import { LangWordService } from './services/lang-word.service';
import { PhrasesLangService } from './view-models/phrases-lang.service';
import { WordsLangService } from './view-models/words-lang.service';


@NgModule({
  declarations: [
    AppComponent,
    WordsUnitComponent,
    SettingsComponent,
    PhrasesUnitComponent,
    WordsUnitDetailComponent,
    PhrasesUnitDetailComponent,
    WordsDictComponent,
    DictBrowserComponent,
    PhrasesLangComponent,
    PhrasesLangDetailComponent,
    WordsLangComponent,
    WordsLangDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // Material
    MatTabsModule,
    // PrimeNG
    TableModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    ListboxModule,
    DropdownModule,
    TooltipModule,
    // 3rd-party
    ClipboardModule,
  ],
  providers: [
    DictWordService,
    DictNoteService,
    LanguageService,
    TextbookService,
    UnitPhraseService,
    UnitWordService,
    UserSettingService,
    HtmlService,
    AutoCorrectService,
    LangPhraseService,
    LangWordService,
    // view models
    AppService,
    PhrasesUnitService,
    SettingsService,
    WordsUnitService,
    PhrasesLangService,
    WordsLangService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Material
import { MatTabsModule } from '@angular/material/tabs';
import { DragDropModule } from '@angular/cdk/drag-drop';
// PrimeNG
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { ToolbarModule } from 'primeng/toolbar';
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
// 3rd-party
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { WordsUnitComponent } from './components/words/words-unit/words-unit.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './components/misc/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { DictionaryService } from './services/misc/dictionary.service';
import { LanguageService } from './services/misc/language.service';
import { TextbookService } from './services/misc/textbook.service';
import { UnitWordService } from './services/wpp/unit-word.service';
import { UserSettingService } from './services/misc/user-setting.service';
import { SettingsService } from './view-models/misc/settings.service';
import { WordsUnitService } from './view-models/wpp/words-unit.service';
import { FormsModule } from '@angular/forms';
import { AppService } from './view-models/misc/app.service';
import { PhrasesUnitComponent } from './components/phrases/phrases-unit/phrases-unit.component';
import { PhrasesUnitService } from './view-models/wpp/phrases-unit.service';
import { UnitPhraseService } from './services/wpp/unit-phrase.service';
import { AutoCorrectService } from './services/misc/autocorrect.service';
import { WordsUnitDetailComponent } from './components/words/words-unit-detail/words-unit-detail.component';
import { PhrasesUnitDetailComponent } from './components/phrases/phrases-unit-detail/phrases-unit-detail.component';
import { HtmlService } from './services/misc/html.service';
import { WordsDictComponent } from './components/words/words-dict/words-dict.component';
import { DictBrowserComponent } from './components/misc/dict-browser/dict-browser.component';
import { PhrasesLangComponent } from './components/phrases/phrases-lang/phrases-lang.component';
import { PhrasesLangDetailComponent } from './components/phrases/phrases-lang-detail/phrases-lang-detail.component';
import { WordsLangComponent } from './components/words/words-lang/words-lang.component';
import { WordsLangDetailComponent } from './components/words/words-lang-detail/words-lang-detail.component';
import { LangPhraseService } from './services/wpp/lang-phrase.service';
import { LangWordService } from './services/wpp/lang-word.service';
import { PhrasesLangService } from './view-models/wpp/phrases-lang.service';
import { WordsLangService } from './view-models/wpp/words-lang.service';
import { WordsTextbookComponent } from './components/words/words-textbook/words-textbook.component';
import { PhrasesTextbookComponent } from './components/phrases/phrases-textbook/phrases-textbook.component';
import { WordsTextbookDetailComponent } from './components/words/words-textbook-detail/words-textbook-detail.component';
import { PhrasesTextbookDetailComponent } from './components/phrases/phrases-textbook-detail/phrases-textbook-detail.component';
import { VoiceService } from './services/misc/voice.service';
import { WordFamiService } from './services/wpp/word-fami.service';
import { WordsUnit2Component } from './components/words/words-unit2/words-unit2.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WordsTextbook2Component } from './components/words/words-textbook2/words-textbook2.component';
import { WordsLang2Component } from './components/words/words-lang2/words-lang2.component';
import { PhrasesUnit2Component } from './components/phrases/phrases-unit2/phrases-unit2.component';
import { PhrasesTextbook2Component } from './components/phrases/phrases-textbook2/phrases-textbook2.component';
import { PhrasesLang2Component } from './components/phrases/phrases-lang2/phrases-lang2.component';
import { MatSelectModule } from '@angular/material/select';
import { UsMappingService } from './services/misc/us-mapping.service';
import { PatternsComponent } from './components/patterns/patterns/patterns.component';
import { PatternsDetailComponent } from './components/patterns/patterns-detail/patterns-detail.component';
import { Patterns2Component } from './components/patterns/patterns2/patterns2.component';
import { PatternsService } from './view-models/wpp/patterns.service';
import { PatternService } from './services/wpp/pattern.service';
import { LoginComponent } from './components/misc/login/login.component';
import { UserService } from './services/misc/user.service';
import { LoginService } from './view-models/misc/login.service';


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
    WordsLangDetailComponent,
    WordsTextbookComponent,
    PhrasesTextbookComponent,
    WordsTextbookDetailComponent,
    PhrasesTextbookDetailComponent,
    WordsUnit2Component,
    WordsTextbook2Component,
    WordsLang2Component,
    PhrasesUnit2Component,
    PhrasesTextbook2Component,
    PhrasesLang2Component,
    PatternsComponent,
    PatternsDetailComponent,
    Patterns2Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    // Material
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    // PrimeNG
    TableModule,
    TabMenuModule,
    InputTextModule,
    ButtonModule,
    ToolbarModule,
    ListboxModule,
    DropdownModule,
    TooltipModule,
    PaginatorModule,
    // 3rd-party
    ClipboardModule,
  ],
  providers: [
    DictionaryService,
    LanguageService,
    TextbookService,
    UnitPhraseService,
    UnitWordService,
    UserSettingService,
    HtmlService,
    AutoCorrectService,
    LangPhraseService,
    LangWordService,
    UsMappingService,
    VoiceService,
    WordFamiService,
    PatternService,
    UserService,
    // view models
    AppService,
    PhrasesUnitService,
    SettingsService,
    WordsUnitService,
    PhrasesLangService,
    WordsLangService,
    PatternsService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

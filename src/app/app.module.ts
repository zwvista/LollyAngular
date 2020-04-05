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
import { PaginatorModule, ToolbarModule } from 'primeng/primeng';
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
import { DictionaryService } from './services/dictionary.service';
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
import { NoteService } from './view-models/note.service';
import { WordsTextbookComponent } from './components/words-textbook/words-textbook.component';
import { PhrasesTextbookComponent } from './components/phrases-textbook/phrases-textbook.component';
import { WordsTextbookDetailComponent } from './components/words-textbook-detail/words-textbook-detail.component';
import { PhrasesTextbookDetailComponent } from './components/phrases-textbook-detail/phrases-textbook-detail.component';
import { VoicesService } from './services/voices.service';
import { WordsFamiService } from './view-models/words-fami.service';
import { WordFamiService } from './services/word-fami.service';
import { WordsUnit2Component } from './components/words-unit2/words-unit2.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { WordsTextbook2Component } from './components/words-textbook2/words-textbook2.component';
import { WordsLang2Component } from './components/words-lang2/words-lang2.component';
import { PhrasesUnit2Component } from './components/phrases-unit2/phrases-unit2.component';
import { PhrasesTextbook2Component } from './components/phrases-textbook2/phrases-textbook2.component';
import { PhrasesLang2Component } from './components/phrases-lang2/phrases-lang2.component';
import { MatSelectModule } from '@angular/material';
import { UsMappingService } from './services/us-mapping.service';


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
    PhrasesLang2Component
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
    VoicesService,
    WordFamiService,
    WordsFamiService,
    // view models
    AppService,
    PhrasesUnitService,
    SettingsService,
    WordsUnitService,
    PhrasesLangService,
    WordsLangService,
    NoteService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

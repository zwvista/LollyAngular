import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Material
import { MatTabsModule } from '@angular/material/tabs';
// PrimeNG
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { WordsUnitComponent } from './components/words-unit/words-unit.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './components/settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { DictNoteService, DictOfflineService, DictOnlineService } from './services/dictionary.service';
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
import { WordsUnitDetailComponent } from './components/words-unit-detail/words-unit-detail.component';
import { PhrasesUnitDetailComponent } from './components/phrases-unit-detail/phrases-unit-detail.component';
import { HtmlService } from './services/html.service';
import { DictionaryComponent } from './components/dictionary/dictionary.component';
import { WordsDictComponent } from './components/words-dict/words-dict.component';


@NgModule({
  declarations: [
    AppComponent,
    WordsUnitComponent,
    MessagesComponent,
    SettingsComponent,
    PhrasesUnitComponent,
    WordsUnitDetailComponent,
    PhrasesUnitDetailComponent,
    DictionaryComponent,
    WordsDictComponent
  ],
  imports: [
    BrowserModule,
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
  ],
  providers: [
    DictOnlineService,
    DictOfflineService,
    DictNoteService,
    LanguageService,
    MessageService,
    TextbookService,
    UnitPhraseService,
    UnitWordService,
    UserSettingService,
    HtmlService,
    // view models
    AppService,
    PhrasesUnitService,
    SettingsService,
    WordsUnitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

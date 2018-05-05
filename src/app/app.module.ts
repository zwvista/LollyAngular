import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

import { AppComponent } from './app.component';
import { WordsUnitComponent } from './components/words-unit/words-unit.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
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


@NgModule({
  declarations: [
    AppComponent,
    WordsUnitComponent,
    MessagesComponent,
    SettingsComponent,
    PhrasesUnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    TableModule,
    TabMenuModule,
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

    // view models
    AppService,
    PhrasesUnitService,
    SettingsService,
    WordsUnitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

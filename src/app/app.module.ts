import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WordsUnitComponent } from './words-unit/words-unit.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { SettingsComponent } from './settings/settings.component';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from './services/message.service';
import {DictNoteService, DictOfflineService, DictOnlineService} from './services/dictionary.service';
import {LanguageService} from './services/language.service';
import {TextbookService} from './services/textbook.service';
import {UnitWordService} from './services/unit-word.service';
import {UserSettingService} from './services/user-setting.service';
import {SettingsService} from './view-models/settings.service';
import {WordsUnitService} from './view-models/words-unit.service';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WordsUnitComponent,
    MessagesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    DictOnlineService,
    DictOfflineService,
    DictNoteService,
    LanguageService,
    MessageService,
    TextbookService,
    UnitWordService,
    UserSettingService,
    SettingsService,
    WordsUnitService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PhrasesUnitComponent } from './components/phrases/phrases-unit/phrases-unit.component';
import { WordsUnitDetailComponent } from './components/words/words-unit-detail/words-unit-detail.component';
import { PhrasesUnitDetailComponent } from './components/phrases/phrases-unit-detail/phrases-unit-detail.component';
import { WordsDictComponent } from './components/words/words-dict/words-dict.component';
import { DictBrowserComponent } from './components/misc/dict-browser/dict-browser.component';
import { PhrasesLangComponent } from './components/phrases/phrases-lang/phrases-lang.component';
import { PhrasesLangDetailComponent } from './components/phrases/phrases-lang-detail/phrases-lang-detail.component';
import { WordsLangComponent } from './components/words/words-lang/words-lang.component';
import { WordsLangDetailComponent } from './components/words/words-lang-detail/words-lang-detail.component';
import { WordsTextbookComponent } from './components/words/words-textbook/words-textbook.component';
import { PhrasesTextbookComponent } from './components/phrases/phrases-textbook/phrases-textbook.component';
import { WordsTextbookDetailComponent } from './components/words/words-textbook-detail/words-textbook-detail.component';
import { PhrasesTextbookDetailComponent } from './components/phrases/phrases-textbook-detail/phrases-textbook-detail.component';
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
import { PatternsComponent } from './components/patterns/patterns/patterns.component';
import { PatternsDetailComponent } from './components/patterns/patterns-detail/patterns-detail.component';
import { Patterns2Component } from './components/patterns/patterns2/patterns2.component';
import { LoginComponent } from './components/misc/login/login.component';


@NgModule({ declarations: [
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
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
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
        ClipboardModule], providers: [
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class AppModule { }

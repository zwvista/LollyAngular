import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// Material
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
// PrimeNG
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { ListboxModule } from 'primeng/listbox';
import { PaginatorModule } from 'primeng/paginator';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
// 3rd-party
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './components/misc/settings/settings.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DictBrowserComponent } from './components/misc/dict-browser/dict-browser.component';
import { LoginComponent } from './components/misc/login/login.component';
import { Patterns2Component } from './components/patterns/patterns2/patterns2.component';
import { PatternsComponent } from './components/patterns/patterns/patterns.component';
import { PatternsDetail2Component } from './components/patterns/patterns-detail2/patterns-detail2.component';
import { PatternsDetailComponent } from './components/patterns/patterns-detail/patterns-detail.component';
import { PhrasesLang2Component } from './components/phrases/phrases-lang2/phrases-lang2.component';
import { PhrasesLangComponent } from './components/phrases/phrases-lang/phrases-lang.component';
import { PhrasesLangDetail2Component } from './components/phrases/phrases-lang-detail2/phrases-lang-detail2.component';
import { PhrasesLangDetailComponent } from './components/phrases/phrases-lang-detail/phrases-lang-detail.component';
import { PhrasesTextbook2Component } from './components/phrases/phrases-textbook2/phrases-textbook2.component';
import { PhrasesTextbookComponent } from './components/phrases/phrases-textbook/phrases-textbook.component';
import { PhrasesTextbookDetail2Component } from './components/phrases/phrases-textbook-detail2/phrases-textbook-detail2.component';
import { PhrasesTextbookDetailComponent } from './components/phrases/phrases-textbook-detail/phrases-textbook-detail.component';
import { PhrasesUnit2Component } from './components/phrases/phrases-unit2/phrases-unit2.component';
import { PhrasesUnitComponent } from './components/phrases/phrases-unit/phrases-unit.component';
import { PhrasesUnitDetail2Component } from './components/phrases/phrases-unit-detail2/phrases-unit-detail2.component';
import { PhrasesUnitDetailComponent } from './components/phrases/phrases-unit-detail/phrases-unit-detail.component';
import { WordsDictComponent } from './components/words/words-dict/words-dict.component';
import { WordsLang2Component } from './components/words/words-lang2/words-lang2.component';
import { WordsLangComponent } from './components/words/words-lang/words-lang.component';
import { WordsLangDetail2Component } from './components/words/words-lang-detail2/words-lang-detail2.component';
import { WordsLangDetailComponent } from './components/words/words-lang-detail/words-lang-detail.component';
import { WordsTextbook2Component } from './components/words/words-textbook2/words-textbook2.component';
import { WordsTextbookComponent } from './components/words/words-textbook/words-textbook.component';
import { WordsTextbookDetail2Component } from './components/words/words-textbook-detail2/words-textbook-detail2.component';
import { WordsTextbookDetailComponent } from './components/words/words-textbook-detail/words-textbook-detail.component';
import { WordsUnit2Component } from './components/words/words-unit2/words-unit2.component';
import { WordsUnitComponent } from './components/words/words-unit/words-unit.component';
import { WordsUnitDetail2Component } from './components/words/words-unit-detail2/words-unit-detail2.component';
import { WordsUnitDetailComponent } from './components/words/words-unit-detail/words-unit-detail.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { Checkbox, CheckboxModule } from 'primeng/checkbox';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { ToggleSwitchModule } from 'primeng/toggleswitch';


@NgModule({
  declarations: [
    AppComponent,
    DictBrowserComponent,
    LoginComponent,
    Patterns2Component,
    PatternsComponent,
    PatternsDetail2Component,
    PatternsDetailComponent,
    PhrasesLang2Component,
    PhrasesLangComponent,
    PhrasesLangDetail2Component,
    PhrasesLangDetailComponent,
    PhrasesTextbook2Component,
    PhrasesTextbookComponent,
    PhrasesTextbookDetail2Component,
    PhrasesTextbookDetailComponent,
    PhrasesUnit2Component,
    PhrasesUnitComponent,
    PhrasesUnitDetail2Component,
    PhrasesUnitDetailComponent,
    SettingsComponent,
    WordsDictComponent,
    WordsLang2Component,
    WordsLangComponent,
    WordsLangDetail2Component,
    WordsLangDetailComponent,
    WordsTextbook2Component,
    WordsTextbookComponent,
    WordsTextbookDetail2Component,
    WordsTextbookDetailComponent,
    WordsUnit2Component,
    WordsUnitComponent,
    WordsUnitDetail2Component,
    WordsUnitDetailComponent,
  ],
  bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        FormsModule,
        DragDropModule,
        // Material
        MatButtonModule,
        MatCheckboxModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatSelectModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        // PrimeNG
        ButtonModule,
        CheckboxModule,
        DynamicDialogModule,
        DropdownModule,
        FloatLabelModule,
        InputTextModule,
        ListboxModule,
        PaginatorModule,
        TabMenuModule,
        TableModule,
        ToggleSwitchModule,
        ToolbarModule,
        TooltipModule,
        // 3rd-party
        ClipboardModule,
        Checkbox
    ],
  providers: [
    DialogService,
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import {AppRoutingModule} from './app-routing.module';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AppComponent} from './app.component';
import {AlertComponent} from './_components';
import {HomeComponent} from './home';
import {BooksComponent} from './books/books.component';

;
import {TypeaheadTemplateComponent} from './typeahead-template/typeahead-template.component'
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    BooksComponent,
    TypeaheadTemplateComponent
  ],
  bootstrap: [AppComponent, TypeaheadTemplateComponent],
  exports: [TypeaheadTemplateComponent]
})

export class AppModule {
};

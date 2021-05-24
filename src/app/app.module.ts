import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {JwtInterceptor, ErrorInterceptor} from './_helpers';
import {AppComponent} from './app.component';
import {AlertComponent} from './_components';
import {HomeComponent} from './home';
import {BooksComponent} from './books/books.component';


import {TypeaheadTemplateComponent} from './typeahead-template/typeahead-template.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ChangePasswordComponent} from '@app/users/change-password.component';


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
    ChangePasswordComponent,
    TypeaheadTemplateComponent
  ],

  bootstrap: [AppComponent, TypeaheadTemplateComponent],
  exports: [TypeaheadTemplateComponent]
})

export class AppModule {
}

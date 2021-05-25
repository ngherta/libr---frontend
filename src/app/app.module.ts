import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AlertComponent} from './_components';
import {HomeComponent} from './home';
import {BooksComponent} from './books/books.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { ProfileComponent } from './profile/profile.component'

import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import {ChangePasswordComponent} from '@app/users/change-password.component';;
import { InsideBookComponent } from './inside-book/inside-book.component'

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    MatCardModule,
    NoopAnimationsModule,
    MatFormFieldModule],
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    BooksComponent,
    ChangePasswordComponent,

    ProfileComponent ,

    InsideBookComponent ],
  bootstrap: [AppComponent],
})

export class AppModule {
}

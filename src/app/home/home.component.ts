import {Component} from '@angular/core';

import {BookService} from '@app/_services/book.service';
import {logger} from 'codelyzer/util/logger';
import {first} from "rxjs/operators";
import {AccountService} from "@app/_services";
import {Book} from "@app/_models/book";


@Component({
  templateUrl: 'home.component.html',
})


export class HomeComponent {
  books: Book[] = [];

  constructor(private bookService: BookService,
              private accountService: AccountService) {  }
  showData(data: string) {
    this.bookService.findInGoogleApi(data)
      .subscribe(dataResponse => {
        for (const dataResponseElement of dataResponse.items) {
          console.log(dataResponseElement.volumeInfo);
        }
      });
  }

}

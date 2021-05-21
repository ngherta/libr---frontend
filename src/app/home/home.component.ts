import {Component, OnInit} from '@angular/core';

import {BookService} from '@app/_services/book.service';
import {debounceTime, first, map} from 'rxjs/operators';
import {AccountService} from '@app/_services';
import {Book} from '@app/_models/book';
import {Observable, OperatorFunction} from "rxjs";


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['style.css']
})

export class HomeComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService,
              private accountService: AccountService) {
  }


  ngOnInit() {
    // this.bookService.findInGoogleApi(book)
    //   .pipe(first())
    //   .subscribe(books => {
    //     for (const book of books) {
    //       this.books = books;
    //     }
    //   });

  }

  showData(data: string) {
    this.books = [];
    this.bookService.findInGoogleApi(data)
      .subscribe(dataResponse => {
        console.log(dataResponse);
        for (let i = 0; i < dataResponse.items.length; i++) {
          this.books.push(dataResponse.items[i].volumeInfo);
        }
      });
  }

}

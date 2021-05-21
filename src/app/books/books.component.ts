import { Component, OnInit } from '@angular/core';
import {User} from '@app/_models';
import {Book} from '@app/_models/book';
import {Subject} from 'rxjs';
import {AccountService} from '@app/_services';
import {first} from 'rxjs/operators';
import {BookService} from '@app/_services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less']
})
export class BooksComponent implements OnInit {
  books: Book[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5
    // };

    this.bookService.findInGoogleApi('java')
      .pipe(first())
      .subscribe(books => {
        this.books = books;
        this.dtTrigger.next();
      });
  }

}

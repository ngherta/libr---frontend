import { Component, OnInit } from '@angular/core';

import { BookService } from '@app/_services/book.service';
import { debounceTime, first, map } from 'rxjs/operators';
import { AccountService, AlertService } from '@app/_services';
import { Book } from '@app/_models/book';
import { Observable, OperatorFunction } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['style.css']
})

export class HomeComponent implements OnInit {

  constructor(private bookService: BookService,
              private accountService: AccountService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    // this.userId = localStorage.getItem('user').id;
    this.userRole = accountService.getRole();
  }
  books: Book[] = [];
  booksData: Book[] = [];
  vote: number;
  form: FormGroup;
  id: string;
  userId: string;
  userRole: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  condition = false;


  ngOnInit() {
    this.userId = JSON.parse(localStorage.getItem('user')).id;
    this.fetchBooks();
  }

  showData(data: string) {
    this.books = [];
    this.condition = false;
    this.bookService.findInGoogleApi(data)
      .subscribe(dataResponse => {

        console.log(dataResponse);
        for (let i = 0; i < dataResponse.items.length; i++) {
          if (i === 5) { break; }
          const b = dataResponse.items[i].volumeInfo;
          b.apiId = dataResponse.items[i].id;
          this.books.push(b);
        }
        this.condition = true;
      });

  }

  public saveBook(book: Book) {
    $("#confirmationRequestModal-" + book.apiId).modal('hide');
    this.clearArray();
    book.userId = Number.parseInt(this.userId);
    this.bookService.save(book)
      .pipe(first())
      .subscribe(
        data => {
          this.fetchBooks();
          this.alertService.success('Book added successfully', { keepAfterRouteChange: false });
        },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

  public status(bookId, bookStatus) {
    this.bookService.updateStatus(this.userId, bookId, bookStatus)
      .subscribe(data => {
        this.fetchBooks();
        if (bookStatus === 'REQUESTED') {
          this.alertService.success('Book requested successfully', { keepAfterRouteChange: false });
        }
      },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

  public upVote(bookId) {
    this.bookService.vote(this.userId, bookId, 1)
      .subscribe(data => {
        this.fetchBooks();
      },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }



  private fetchBooks() {
    this.bookService.getAllFiltered()
      .pipe(first())
      .subscribe(booksD => {
        this.booksData = booksD;
        // this.dtTrigger.next();
      });
  }

  public downVote(bookId) {
    this.bookService.vote(this.userId, bookId, -1)
      .subscribe(data => {
        this.fetchBooks();
      },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

  clearArray() {
    document.getElementById('myInput').value = '';
    this.condition = false;
  }

}

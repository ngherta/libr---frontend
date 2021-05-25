import {Component, OnInit} from '@angular/core';

import {BookService} from '@app/_services/book.service';
import {debounceTime, first, map} from 'rxjs/operators';
import {AccountService, AlertService} from '@app/_services';
import {Book} from '@app/_models/book';
import {Observable, OperatorFunction} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['style.css']
})

export class HomeComponent implements OnInit {
  books: Book[] = [];
  booksData: Book[] = [];
  form: FormGroup;
  id: string;
  userId: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(private bookService: BookService,
              private accountService: AccountService,
              private alertService: AlertService,
              private route: ActivatedRoute,
              private router: Router
  ) {
    this.userId = localStorage.getItem('user');
  }


  ngOnInit() {
    // this.booksData.sort((a,b)=>a.vote > b.vote);
    // this.booksData.sort((a,b) => a.vote.localeCompare(b.vote));
    // this.booksData.sort(function (a, b) {
    //   return a.vote - b.vote;
    // });

    // this.booksData.sort((a,b) => a.vote.localeCompare(b.vote));

    this.userId = JSON.parse(localStorage.getItem('user')).id;
    this.bookService.getAll()
      .pipe(first())
      .subscribe(booksD => {
        this.booksData = booksD;
        // this.dtTrigger.next();
      });
  }

  condition: boolean = false;

  showData(data: string) {
    this.books = [];
    this.condition = false;
    this.bookService.findInGoogleApi(data)
      .subscribe(dataResponse => {

        console.log(dataResponse);
        for (let i = 0; i < dataResponse.items.length; i++) {
          if (i === 5) break;
          this.condition = true;
          this.books.push(dataResponse.items[i].volumeInfo);
        }

        console.log(this.books);

        // if (this.books.length > 0) {
        //   this.condition = true;
        // }
        // else this.condition = false;
      });

  }

  public saveBook(book: Book) {
    this.bookService.save(book)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Book added successfully', {keepAfterRouteChange: true});
          this.router.navigate(['.', {relativeTo: this.route}]);
        },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

  public upVote(bookId) {
    this.bookService.vote(this.userId, bookId, 1)
      .subscribe(data => {
          console.log(data);
          //use the sum of votes here
        },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

  public downVote(bookId) {
    this.bookService.vote(this.userId, bookId, -1)
      .subscribe(data => {
          console.log(data);
          //use the sum of votes here
        },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

  clearArray() {
    this.books = [];
    this.condition = false;
  }

}

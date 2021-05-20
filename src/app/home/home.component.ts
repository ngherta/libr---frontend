import {Component, OnInit} from '@angular/core';

import {BookService} from '@app/_services/book.service';
import {debounceTime, first, map} from 'rxjs/operators';
import {AccountService, AlertService} from '@app/_services';
import {Observable, OperatorFunction} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {Book} from "@app/_models/book";


@Component({
  templateUrl: 'home.component.html',
  styleUrls: ['style.css']
})

export class HomeComponent implements OnInit {
  books: Book[] = [];
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(private bookService: BookService,
              private accountService: AccountService,
              private alertService : AlertService,
              private route: ActivatedRoute,
              private router: Router
) {
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

  condition: boolean = false;
  showData(data: string) {
    this.books = [];
    this.condition = false;
    this.bookService.findInGoogleApi(data)
      .subscribe(dataResponse => {

        console.log(dataResponse);
        for (let i = 0; i < dataResponse.items.length; i++) {
          if(i ===  5) break;
          this.condition = true;
          this.books.push(dataResponse.items[i].volumeInfo);
          this.books.id = i;
          console.log(this.books.id);
        }

        console.log(this.books);

        // if (this.books.length > 0) {
        //   this.condition = true;
        // }
        // else this.condition = false;
      });

  }

  private saveBook() {
    this.bookService.save(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Book added successfully', { keepAfterRouteChange: true });
          this.router.navigate(['.', { relativeTo: this.route }]);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });

    console.log("save book is working");

  }

  clearArray() {
    this.books = [];
    this.condition = false;
  }

}

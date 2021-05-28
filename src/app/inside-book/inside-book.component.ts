import { Component, OnInit } from '@angular/core';
import {Book} from '@app/_models/book';
import {Subject} from 'rxjs';
import {BookService} from '@app/_services/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first, map} from 'rxjs/operators';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService, AlertService} from "@app/_services";

@Component({
  selector: 'app-inside-book',
  templateUrl: './inside-book.component.html',
  styleUrls: ['./inside-book.component.less']
})
export class InsideBookComponent implements OnInit {
  bookId: string = null;
  userId: number;
  filterName: string;
  book: Book = null;
  loading: boolean = true;
  formComments: FormGroup;
  submitted = false;
  returnUrl: string;

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private accountService: AccountService,
              private alertService: AlertService) {
  }

  ngOnInit() {
    this.formComments = this.formBuilder.group({
        comment: ['', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.userId = JSON.parse(localStorage.getItem('user')).id;

    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.bookService.getById(this.bookId).pipe(
      map((book: Book) => this.book = book, this.loading = false)
    ).subscribe();

  }

  get f() { return this.formComments.controls; }

  onSubmit() {

    // this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    if (this.formComments.invalid) {
      return;
    }

    this.bookService.comment(this.f.comment.value, this.userId, this.book.id)
      .pipe(first())
      .subscribe(
        data => {
          this.bookService.getById(this.bookId).pipe(
            map((book: Book) => this.book = book, this.loading = false)
          ).subscribe();
        },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }


  formDate(date: any) {
    let today = new Date(date);
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let day = today.getDate()+1;
    let month = today.getMonth()+1;
    let year = today.getFullYear();

    return year + "-" + (month<10 ? ("0" + month) : month)+ "-" + (day<10 ? ("0" + day) : day)
      + "  " + (hours<10 ? ("0" + hours) : hours) + ":" + minutes;
  }
}

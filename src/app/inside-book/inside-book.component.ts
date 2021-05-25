import { Component, OnInit } from '@angular/core';
import {Book} from '@app/_models/book';
import {Subject} from 'rxjs';
import {BookService} from '@app/_services/book.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-inside-book',
  templateUrl: './inside-book.component.html',
  styleUrls: ['./inside-book.component.less']
})
export class InsideBookComponent implements OnInit {
  bookId: string = null;
  book: Book = null;
  loading: boolean = true;

  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.bookId = this.activatedRoute.snapshot.params['id'];
    this.bookService.getById(this.bookId).pipe(
      map((book: Book) => this.book = book, this.loading = false)
    ).subscribe()
  }
}

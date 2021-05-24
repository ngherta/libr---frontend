import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, OperatorFunction, Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, map, merge} from "rxjs/operators";
import {Book} from "@app/_models/book";
import {BookService} from "@app/_services/book.service";
import {AccountService} from "@app/_services";
import {NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-typeahead-template',
  templateUrl: './typeahead-template.component.html',
  styles: [`
    .form-control {
    width: 300px;
  }
  `]
})

export class TypeaheadTemplateComponent {
  public model: any;
  books: Book[] = [];

  @ViewChild('typeaheadInstance')
  private typeaheadInstance: NgbTypeahead;

  constructor(private bookService: BookService) {
  }

  // search: (text$: Observable<string>) => Observable<Book[]> = (text$: Observable<string>) =>
  //   text$.pipe(
  //     distinctUntilChanged(),
  //     debounceTime(200),
  //     map(term => {
  //       console.log(term);
  //       this.bookService.findInGoogleApi(term)
  //         .subscribe(dataResponse => {
  //           this.books = [];
  //           for (let i = 0; i < dataResponse.items.length; i++) {
  //             this.books.push(dataResponse.items[i].volumeInfo);
  //           }
  //         });
  //       return this.books.slice(0, 3);
  //     }))

  formatter = (x: { title: string }) => x.title;
}

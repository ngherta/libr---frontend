import {User} from "@app/_models";

import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import {environment} from '@environments/environment';
import {Book} from '@app/_models/book';
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class BookService {
  private bookSubject: BehaviorSubject<Book>;
  public book: Observable<Book>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.bookSubject = new BehaviorSubject<Book>(JSON.parse(localStorage.getItem('book')));
    this.book = this.bookSubject.asObservable();
  }

  public get bookValue(): Book {
    return this.bookSubject.value;
  }

  findInGoogleApi(keyword: string) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=` + keyword);
  }

  save(book: Book) {
    return this.http.post(`${environment.apiUrl}/books`, book);
  }

  getById(id: string) {
    return this.http.get<Book>(`${environment.apiUrl}/books/${id}`);
  }

  getAll() {
    return this.http.get<Book[]>(`${environment.apiUrl}/books`);
  }

  getAllFiltered() {
    return this.http.get<Book[]>(`${environment.apiUrl}/books/filtered`);
  }

  delete(id: string) {
    return this.http.delete(`${environment.apiUrl}/books/${id}`)
      .pipe(map(x => {
        return x;
      }));
  }

  register(book: Book) {
    return this.http.post(`${environment.apiUrl}/books`, book);
  }

  vote(userId: string, bookId: number, vote: number) {
    console.log(userId, bookId, vote);
    return this.http.post(`${environment.apiUrl}/vote`, { "userId": userId, "bookId": bookId, "vote": vote });
  }

  getStatus() {

  }

  addBookReaction(userId, bookId, reaction) {
    return this.http.post(`${environment.apiUrl}/reaction`,
      { "userId": userId, "bookId": bookId, "type": reaction });
  }

  comment(comment, userId, bookId) {
    console.log(comment, userId, bookId);
    return this.http.post(`${environment.apiUrl}/comments/`, { "userId": userId, "bookId": bookId, "comment": comment });
  }

  updateStatus(userId, bookId, status) {
    return this.http.post(`${environment.apiUrl}/book-actions/update-status`, { "userId": userId, "bookId": bookId, "newStatus": status });
  }

  update(id, params) {
    return this.http.put(`${environment.apiUrl}/books/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id === this.bookValue.id) {
          // update local storage
          const book = { ...this.bookValue, ...params };
          localStorage.setItem('book', JSON.stringify(book));

          // publish updated user to subscribers
          this.bookSubject.next(book);
        }
        return x;
      }));
  }
}

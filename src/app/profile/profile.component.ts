import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from '@app/_models';
import {ActivatedRoute} from '@angular/router';
import {AccountService, AlertService} from '@app/_services';
import {map} from 'rxjs/operators';
import {BookService} from '@app/_services/book.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  userId: string = null;
  user: User = null;
  bookAction: any;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: AccountService,
    private bookService: BookService,
    private alertService: AlertService
  ) {
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params.id;
    console.log(this.userId);
    this.userService.getById(this.userId).pipe(
      map((user: User) => this.user = user)
    ).subscribe();

    this.fetchBookActionByStatusSubmitted();
  }

  public status(bookId, bookStatus) {
    this.bookService.updateStatus(this.userId, bookId, bookStatus)
      .subscribe(data => {
          this.fetchBookActionByStatusSubmitted();
          if (bookStatus === 'REQUESTED') {
            this.alertService.success('Book requested successfully', {keepAfterRouteChange: false});
          }
        },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

  fetchBookActionByStatusSubmitted() {
    this.bookService.getBookActionByStatus('SUBMITTED').subscribe(
      dataResponse => {
        this.bookAction = dataResponse;
      }
    );
  }

  fetchBookActionByStatusRequested(){
    this.bookService.getBookActionByStatus('REQUESTED').subscribe(
      dataResponse => {
        this.bookAction = dataResponse;
        // for (const actionInfo of dataResponse.items) {
        //   this.bookAction.push(actionInfo);
        //   console.log(actionInfo);
        // }
      }
    );
  }
}

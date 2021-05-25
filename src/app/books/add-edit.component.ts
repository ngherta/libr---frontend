import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '@app/_services';
import {BookService} from '@app/_services/book.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
})
export class AddEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  isAddMode: boolean;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

    if (!this.isAddMode) {
      this.bookService.getById(this.id)
        .pipe(first())
        .subscribe(x => {
          // this.f.id.setValue(x.id);
          this.f.title.setValue(x.title);
          this.f.authors.setValue(x.authors);
          this.f.publisher.setValue(x.publisher);
          this.f.publishedDate.setValue(x.publishedDate);
          this.f.description.setValue(x.description);
          this.f.industryIdentifiers.setValue(x.industryIdentifiers);
          this.f.pageCount.setValue(x.pageCount);
          this.f.categories.setValue(x.categories);
          this.f.averageRating.setValue(x.averageRating);
          this.f.ratingsCount.setValue(x.ratingsCount);
          this.f.maturityRating.setValue(x.maturityRating);
          this.f.imageLinks.setValue(x.imageLinks);
          this.f.language.setValue(x.language);
          this.f.previewLink.setValue(x.previewLink);
        });
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createBook();
    } else {
      this.updateBook();
    }
  }

  private createBook() {
    this.bookService.register(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Book added successfully', { keepAfterRouteChange: true });
          this.router.navigate(['.', { relativeTo: this.route }]);
        },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

  private updateBook() {
    this.bookService.update(this.id, this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.alertService.success('Update successful', { keepAfterRouteChange: true });
          this.router.navigate(['..', { relativeTo: this.route }]);
        },
        error => {
          this.alertService.error(error.error.errorMessage);
          this.loading = false;
        });
  }

}

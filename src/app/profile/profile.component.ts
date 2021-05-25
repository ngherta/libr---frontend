import {Component, OnInit} from '@angular/core';
import {User} from "@app/_models";
import {ActivatedRoute} from "@angular/router";
import {AccountService} from "@app/_services";
import {map} from "rxjs/operators";
import {log} from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {

  userId: string = null;
  user: User = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: AccountService
  ) {
  }

  ngOnInit(): void {
    this.userId = this.activatedRoute.snapshot.params['id'];
    this.userService.getById(this.userId).pipe(
      map((user: User) => this.user = user)
    ).subscribe()

  }

}

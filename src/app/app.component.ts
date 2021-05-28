import { Component } from '@angular/core';

import { AccountService } from './_services';
import { User } from './_models';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html' })

export class AppComponent {
    user: User;
    userId: number;

    constructor(private accountService: AccountService) {
      // this.userId = accountService.userId;
      this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}

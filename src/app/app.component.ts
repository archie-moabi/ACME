import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Account } from './_models/account';
import { AccountsService } from './_services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'acme';
  accountList$: Observable<Account[]> = of([]);

  constructor(private accountService: AccountsService) {}
  ngOnInit(): void {
    this.accountList$ = this.accountService.getAccounts();
  }
}

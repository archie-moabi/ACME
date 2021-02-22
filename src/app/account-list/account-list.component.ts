import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { filter, take } from 'rxjs/operators';
import { WidthdrawalDialogComponent } from '../modals/widthdrawal-dialog/widthdrawal-dialog.component';
import { Account, AccountType } from '../_models/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent implements OnInit {
  displayedColumns: string[] = [
    'account_number',
    'account_type',
    'balance',
    'buttons',
  ];
  @Input() dataSource: Account[] = [];
  accountType: AccountType;
  durationInSeconds = 5;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  getTotalBalance(): number {
    if (this.dataSource) {
      return this.dataSource
        .map((t) => Number(t.balance))
        .reduce((acc, value) => acc + value, 0);
    }
  }

  onWidthdrawal(account: Account): void {
    const dialogRef = this.dialog.open(WidthdrawalDialogComponent, {
      width: '250px',
      data: account,
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((result) => result),
        take(1)
      )
      .subscribe((result) => {
        const acc = this.calculateNewBalance(result.account, result.amount);
        this.updateAccount(acc);
        this.openSnackBar();
      });
  }

  calculateNewBalance(account: Account, widthdrawalAmount: number): Account {
    const newBalance = Number(account.balance) - widthdrawalAmount;
    return { ...account, balance: newBalance };
  }

  updateAccount(account: Account): void {
    const index = this.dataSource.findIndex(
      (acc) => acc.account_number === account.account_number
    );
    if (index !== -1) {
      this.dataSource = [
        ...this.dataSource.slice(0, index),
        account,
        ...this.dataSource.slice(index + 1),
      ];
    }
  }

  openSnackBar(): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds * 1000,
      verticalPosition: 'top',
    });
  }
}

@Component({
  selector: 'snack-bar-component',
  template: `<span class="snackbar-content">
    Widthdrawal was successful!
  </span>`,
  styles: [
    `
      .snackbar-content {
        color: #fff;
      }
    `,
  ],
})
export class SnackBarComponent {}

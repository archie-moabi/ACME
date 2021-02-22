import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Account, AccountType } from 'src/app/_models/account';

@Component({
  selector: 'app-widthdrawal-dialog',
  templateUrl: './widthdrawal-dialog.component.html',
  styleUrls: ['./widthdrawal-dialog.component.scss'],
})
export class WidthdrawalDialogComponent {
  amount = 0;
  availableAmount = 0;
  errorMessage = '';
  constructor(
    public dialogRef: MatDialogRef<WidthdrawalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Account
  ) {
    this.setAvailableAmount();
  }

  setAvailableAmount(): void {
    this.availableAmount = this.data.balance;

    if (Number(AccountType[this.data.account_type]) === AccountType.cheque) {
      this.availableAmount = Number(this.data.balance) + 500;
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onConfirm(): void {
    if (this.amount > this.availableAmount) {
      this.errorMessage = 'Amount exceeds available amount';
      return;
    }
    this.dialogRef.close({ account: this.data, amount: this.amount });
  }
}

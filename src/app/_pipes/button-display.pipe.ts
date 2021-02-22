import { Pipe, PipeTransform } from '@angular/core';
import { Account, AccountType } from './../_models/account';

@Pipe({
  name: 'buttonDisplay',
})
export class ButtonDisplayPipe implements PipeTransform {
  transform(value: Account, ...args: unknown[]): boolean {
    switch (Number(AccountType[value.account_type])) {
      case AccountType.savings:
        return value.balance <= 0;
      case AccountType.cheque:
        return value.balance <= -500;
      default:
        return true;
    }
  }
}

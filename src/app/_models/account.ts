export interface Account {
  account_number: string;
  account_type: AccountType;
  balance: number;
}

export enum AccountType {
  cheque = 0,
  savings = 1,
}

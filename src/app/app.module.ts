import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountListComponent } from './account-list/account-list.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WidthdrawalDialogComponent } from './modals/widthdrawal-dialog/widthdrawal-dialog.component';
import { ButtonDisplayPipe } from './_pipes/button-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountListComponent,
    ButtonDisplayPipe,
    WidthdrawalDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [WidthdrawalDialogComponent],
})
export class AppModule {}

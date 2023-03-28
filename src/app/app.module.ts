import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { CreateUserButtonComponent } from './create-user-button/create-user-button.component';
import { DeleteUserButtonComponent } from './delete-user-button/delete-user-button.component';
import { EditUserButtonComponent } from './edit-user-button/edit-user-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserFormComponent,
    DeleteConfirmationComponent,
    CreateUserButtonComponent,
    DeleteUserButtonComponent,
    EditUserButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

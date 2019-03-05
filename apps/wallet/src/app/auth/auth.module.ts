import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ImportAccountComponent } from './import-account/import-account.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [CreateAccountComponent, ImportAccountComponent, LoginComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }

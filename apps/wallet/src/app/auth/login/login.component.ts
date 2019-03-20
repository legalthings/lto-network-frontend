import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { LocalAccountsService, LocalUserAccount, AuthService } from '../../core';
import { Observable } from 'rxjs';
import { Login, DeleteAccount } from '../../+state/actions/auth';
import { Store } from '@ngrx/store';

@Component({
  selector: 'wallet-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  availableAccounts$!: Observable<LocalUserAccount[]>;

  constructor(
    private _localAccountsService: LocalAccountsService,
    private _authService: AuthService,
    private _router: Router,
    private _matSnackbar: MatSnackBar,
    private _store: Store<any>
  ) {}

  ngOnInit() {
    this.availableAccounts$ = this._localAccountsService.availableAccounts$;

    this.loginForm = new FormGroup({
      account: new FormControl('', []),
      password: new FormControl('')
    });
  }

  loginAndRedirect() {
    if (this.loginForm.invalid) {
      return;
    }
    const { account, password } = this.loginForm.value;
    this._store.dispatch(new Login({ userAccount: account, password }));
  }

  deleteAccount(account: LocalUserAccount) {
    this._store.dispatch(new DeleteAccount({ userAccount: account }));
    // const accountsLeft = this._localAccountsService.deleteLocalAccount(account);
    // this._matSnackbar.open('Account has been deleted', 'Dismiss');
    // if (accountsLeft === 0) {
    //   this._router.navigate(['/', 'auth', 'create']);
    // }
  }
}

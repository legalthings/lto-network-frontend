import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import {
  AuthActionTypes,
  ImportAccount,
  ImportAccountFailed,
  ImportAccountSuccess,
  CreateAccount,
  CreateAccountSuccess,
  Login,
  LoginSuccess,
  LoginFailed,
  ShowNotification
} from '../actions';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LocalAccountsService, LocalUserAccount } from '../../core';
import { LtoService, LtoAccount } from '@lto/core';

@Injectable()
export class AuthEffects {
  @Effect() importAccount = this._actions$.pipe(
    ofType<ImportAccount>(AuthActionTypes.ImportAccount),
    switchMap(action => {
      try {
        const { seed, accountName, password } = action.payload;
        const ltoAccount = this._ltoService.createAccountFromExistingPhrase(seed);
        const userAccount = this._createLocalAccount(ltoAccount, accountName, password);

        return [
          new ImportAccountSuccess({ userAccount, ltoAccount }),
          new ShowNotification({ message: 'Account imported' })
        ];
      } catch (error) {
        return [
          new ImportAccountFailed({ error }),
          new ShowNotification({ message: 'Account import failed' })
        ] as any;
      }
    })
  );

  @Effect() createAccount = this._actions$.pipe(
    ofType<CreateAccount>(AuthActionTypes.CreateAccount),
    map(action => {
      const { ltoAccount, accountName, password } = action.payload;
      const userAccount = this._createLocalAccount(ltoAccount, accountName, password);
      return new CreateAccountSuccess({ userAccount, ltoAccount });
    })
  );

  @Effect() login = this._actions$.pipe(
    ofType<Login>(AuthActionTypes.Login),
    map(action => {
      try {
        const { userAccount, password } = action.payload;
        const decryptedSeedPhrase = this._ltoService.decryptSeedPhrase(
          userAccount.encryptedSeed,
          password
        );
        const ltoAccount = this._ltoService.createAccountFromExistingPhrase(decryptedSeedPhrase);
        return [
          new LoginSuccess({ userAccount, ltoAccount }),
          new ShowNotification({ message: 'Logged in' })
        ];
      } catch (error) {
        return [new LoginFailed({ error }), new ShowNotification({ message: 'Login failed' })];
      }
    })
  );

  constructor(
    private _actions$: Actions,
    private _localAccountsService: LocalAccountsService,
    private _ltoService: LtoService
  ) {}

  private _createLocalAccount(
    ltoAccount: LtoAccount,
    accountName: string,
    password: string
  ): LocalUserAccount {
    return this._localAccountsService.createLocalAccount(ltoAccount, accountName, password);
  }
}

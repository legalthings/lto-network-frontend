import { Action } from '@ngrx/store';
import { LocalUserAccount } from '../../core';
import { LtoAccount } from '@lto/core';

export enum AuthActionTypes {
  ImportAccount = '[App] Import account',
  ImportAccountFailed = '[App] Import account failed',
  ImportAccountSuccess = '[App] Import account success',
  CreateAccount = '[App] Create account',
  CreateAccountSuccess = '[App] Create account success',
  Login = '[App] Login',
  LoginSuccess = '[App] Login success',
  LoginFailed = '[App] Login Failed',
  Logout = '[App] Logout',
  DeleteAccount = '[App] Delete account'
}

export class ImportAccount implements Action {
  readonly type = AuthActionTypes.ImportAccount;
  constructor(
    public readonly payload: {
      seed: string;
      accountName: string;
      password: string;
    }
  ) {}
}

export class ImportAccountFailed implements Action {
  readonly type = AuthActionTypes.ImportAccountFailed;
  constructor(public payload: { error: any }) {}
}

export class ImportAccountSuccess implements Action {
  readonly type = AuthActionTypes.ImportAccountSuccess;
  constructor(public payload: { userAccount: LocalUserAccount; ltoAccount: LtoAccount }) {}
}

export class CreateAccount implements Action {
  readonly type = AuthActionTypes.CreateAccount;
  constructor(
    public readonly payload: { ltoAccount: LtoAccount; accountName: string; password: string }
  ) {}
}

export class CreateAccountSuccess implements Action {
  readonly type = AuthActionTypes.CreateAccountSuccess;
  constructor(
    public readonly payload: Readonly<{ userAccount: LocalUserAccount; ltoAccount: LtoAccount }>
  ) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  constructor(
    public readonly payload: {
      userAccount: LocalUserAccount;
      password: string;
    }
  ) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;
  constructor(public readonly payload: { userAccount: LocalUserAccount; ltoAccount: LtoAccount }) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LoginFailed;
  constructor(public readonly payload: { error: any }) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
  constructor(public readonly payload: any) {}
}

export class DeleteAccount implements Action {
  readonly type = AuthActionTypes.DeleteAccount;
  constructor(
    public readonly payload: {
      userAccount: LocalUserAccount;
    }
  ) {}
}

export type AuthAction =
  | ImportAccount
  | ImportAccountSuccess
  | ImportAccountFailed
  | CreateAccount
  | CreateAccountSuccess
  | Login
  | LoginSuccess
  | LoginFailed
  | Logout;

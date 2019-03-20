import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { ShowNotification } from '../actions/notification';
import { tap } from 'rxjs/operators';

@Injectable()
export class NotificationEffects {
  @Effect({ dispatch: false })
  showNotification = this._actions$.pipe(
    ofType<ShowNotification>('[App] show notification'),
    tap(action => {
      const { message, duration, actionLabel } = action.payload;
      this._matSnackbar.open(message, actionLabel || 'Dismiss', { duration: duration || 3000 });
    })
  );

  constructor(private _actions$: Actions, private _matSnackbar: MatSnackBar) {}
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTransferModalComponent } from './new-transfer-modal.component';

@Injectable()
export class NewTransferModal {
  constructor(private _matDialog: MatDialog) {}

  show() {
    this._matDialog.open(NewTransferModalComponent, {
      width: '500px'
    });
  }
}

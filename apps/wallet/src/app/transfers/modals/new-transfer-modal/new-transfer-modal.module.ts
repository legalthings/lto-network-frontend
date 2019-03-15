import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewTransferModal } from './new-transfer-modal';
import { NewTransferModalComponent } from './new-transfer-modal.component';

@NgModule({
  declarations: [NewTransferModalComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  entryComponents: [NewTransferModalComponent],
  providers: [NewTransferModal]
})
export class NewTransferModalModule {}

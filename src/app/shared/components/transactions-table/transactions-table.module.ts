import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { TransactionsTableComponent } from './transactions-table.component';

@NgModule({
  declarations: [TransactionsTableComponent],
  imports: [CommonModule, MatTableModule, RouterModule.forChild([])],
  exports: [TransactionsTableComponent]
})
export class TransactionsTableModule {}

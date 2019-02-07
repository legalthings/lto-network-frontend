import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';

@NgModule({
  declarations: [TransactionsComponent, TransactionDetailsComponent],
  imports: [SharedModule, TransactionsRoutingModule]
})
export class TransactionsModule {}

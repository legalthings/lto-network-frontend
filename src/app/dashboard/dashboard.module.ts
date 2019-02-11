import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MatTableModule } from '@angular/material';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UnconfirmedTransactionsComponent } from './components/unconfirmed-transactions/unconfirmed-transactions.component';
import { LastBlocksComponent } from './components/last-blocks/last-blocks.component';

@NgModule({
  declarations: [DashboardComponent, UnconfirmedTransactionsComponent, LastBlocksComponent],
  imports: [SharedModule, DashboardRoutingModule, MatTableModule]
})
export class DashboardModule {}

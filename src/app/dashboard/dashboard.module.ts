import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MatTableModule } from '@angular/material';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [SharedModule, DashboardRoutingModule, MatTableModule]
})
export class DashboardModule {}

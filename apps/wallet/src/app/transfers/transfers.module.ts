import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';

import { TransfersRoutingModule } from './transfers-routing.module';
import { TransfersComponent } from './transfers.component';
import { NewTransferModalModule } from './modals';

@NgModule({
  declarations: [TransfersComponent],
  imports: [SharedModule, TransfersRoutingModule, NewTransferModalModule]
})
export class TransfersModule {}

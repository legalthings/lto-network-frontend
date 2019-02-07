import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { AddressesRoutingModule } from './addresses-routing.module';
import { AddressesComponent } from './addresses.component';
import { AddressDetailsComponent } from './address-details/address-details.component';

@NgModule({
  declarations: [AddressesComponent, AddressDetailsComponent],
  imports: [SharedModule, AddressesRoutingModule]
})
export class AddressesModule {}

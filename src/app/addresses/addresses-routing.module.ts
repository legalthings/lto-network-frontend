import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressesComponent } from './addresses.component';
import { AddressDetailsComponent } from './address-details/address-details.component';

const routes: Routes = [
  {
    path: '',
    component: AddressesComponent,
    children: [
      {
        path: ':address',
        component: AddressDetailsComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddressesRoutingModule {}

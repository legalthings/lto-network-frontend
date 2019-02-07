import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'blocks',
    loadChildren: './blocks/blocks.module#BlocksModule'
  },
  {
    path: 'addresses',
    loadChildren: './addresses/addresses.module#AddressesModule'
  },
  {
    path: 'transactions',
    loadChildren: './transactions/transactions.module#TransactionsModule'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

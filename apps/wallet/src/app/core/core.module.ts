import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, LocalAccountsService, FeeService, BalanceService } from './services';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [
    AuthService.provider,
    LocalAccountsService.provider,
    FeeService.provider,
    BalanceService.provider
  ]
})
export class CoreModule {}

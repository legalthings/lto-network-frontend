import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthService, LocalAccountsService, FeeService } from './services';

@NgModule({
  imports: [HttpClientModule],
  declarations: [],
  providers: [AuthService.provider, LocalAccountsService.provider, FeeService.provider]
})
export class CoreModule {}

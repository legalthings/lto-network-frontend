import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EncoderService, LtoPublicNodeService, ScreenService } from './services';

import { AppbarModule } from './components/appbar/appbar.module';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [AppbarModule],
  providers: [EncoderService.provider, LtoPublicNodeService.provider, ScreenService.provider]
})
export class CoreModule {}

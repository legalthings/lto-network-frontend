import { NgModule } from '@angular/core';
import { EncoderService, LtoPublicNodeService } from './services';

import { AppbarModule } from './components/appbar/appbar.module';

@NgModule({
  declarations: [],
  imports: [],
  exports: [AppbarModule],
  providers: [EncoderService.provider, LtoPublicNodeService.provider]
})
export class CoreModule {}

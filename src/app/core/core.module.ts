import { NgModule } from '@angular/core';
import { EncoderService, LtoPublicNodeService } from './services';

@NgModule({
  declarations: [],
  imports: [],
  providers: [EncoderService.provider, LtoPublicNodeService.provider]
})
export class CoreModule {}

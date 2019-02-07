import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

import { BlocksRoutingModule } from './blocks-routing.module';
import { BlocksComponent } from './blocks.component';
import { BlocksListComponent } from './blocks-list/blocks-list.component';
import { BlockDetailsComponent } from './block-details/block-details.component';

@NgModule({
  declarations: [BlocksComponent, BlocksListComponent, BlockDetailsComponent],
  imports: [SharedModule, BlocksRoutingModule]
})
export class BlocksModule {}
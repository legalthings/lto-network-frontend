import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { SharedComponentsModule } from './components/shared-components.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, FlexLayoutModule, MaterialModule, SharedComponentsModule]
})
export class SharedModule {}

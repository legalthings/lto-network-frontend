import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { NgSuspenseModule } from 'ng-suspense';

@NgModule({
  declarations: [],
  exports: [CommonModule, FlexLayoutModule, MaterialModule, SharedComponentsModule, NgSuspenseModule]
})
export class SharedModule {}

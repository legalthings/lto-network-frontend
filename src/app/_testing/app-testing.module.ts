import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { EncoderServiceMock } from './mocks';

@NgModule({
  exports: [RouterTestingModule],
  providers: [EncoderServiceMock.provider]
})
export class AppTestingModule {}

import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncoderServiceMock, LtoPublicNodeServiceMock } from './mocks';

@NgModule({
  exports: [RouterTestingModule, HttpClientTestingModule],
  providers: [EncoderServiceMock.provider, LtoPublicNodeServiceMock.provider]
})
export class AppTestingModule {}

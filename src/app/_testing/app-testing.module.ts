import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EncoderServiceMock, LtoPublicNodeServiceMock, ScreenServiceMock } from './mocks';
import { SharedModule } from '@app/shared';

@NgModule({
  exports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
  providers: [
    EncoderServiceMock.provider,
    LtoPublicNodeServiceMock.provider,
    ScreenServiceMock.provider
  ]
})
export class AppTestingModule {}

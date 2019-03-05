import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableAccountsComponent } from './available-accounts.component';

describe('AvailableAccountsComponent', () => {
  let component: AvailableAccountsComponent;
  let fixture: ComponentFixture<AvailableAccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableAccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCardContentComponent } from './data-card-content.component';

describe('DataCardContentComponent', () => {
  let component: DataCardContentComponent;
  let fixture: ComponentFixture<DataCardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataCardContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataCardContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

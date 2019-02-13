import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/_testing';

import { BlocksListComponent } from './blocks-list.component';

describe('BlocksListComponent', () => {
  let component: BlocksListComponent;
  let fixture: ComponentFixture<BlocksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule],
      declarations: [BlocksListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

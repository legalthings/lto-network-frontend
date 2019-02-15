import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModuleWithoutShared } from '@app/_testing';
import { MaterialModule } from '../../material.module';
import { BlocksTableComponent } from './blocks-table.component';
import { ResponsiveTextComponent } from '../responsive-text/responsive-text.component';

describe('BlocksTableComponent', () => {
  let component: BlocksTableComponent;
  let fixture: ComponentFixture<BlocksTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModuleWithoutShared, MaterialModule],
      declarations: [BlocksTableComponent, ResponsiveTextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

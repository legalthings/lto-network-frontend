import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatTableModule } from '@angular/material';
import { AppTestingModuleWithoutShared } from '@app/_testing';
import { ResponsiveTextComponent } from '../responsive-text/responsive-text.component';
import { TransactionsTableComponent } from './transactions-table.component';
import { LtoPipe } from '../../pipes/lto.pipe';

describe('TransactionsTableComponent', () => {
  let component: TransactionsTableComponent;
  let fixture: ComponentFixture<TransactionsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatTableModule, RouterTestingModule, AppTestingModuleWithoutShared],
      declarations: [TransactionsTableComponent, ResponsiveTextComponent, LtoPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

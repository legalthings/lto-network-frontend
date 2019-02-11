import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppTestingModule } from '@app/_testing';
import { MatTableModule } from '@angular/material';
import { LastBlocksComponent } from './components/last-blocks/last-blocks.component';
import { UnconfirmedTransactionsComponent } from './components/unconfirmed-transactions/unconfirmed-transactions.component';

import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppTestingModule, MatTableModule],
      declarations: [DashboardComponent, LastBlocksComponent, UnconfirmedTransactionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

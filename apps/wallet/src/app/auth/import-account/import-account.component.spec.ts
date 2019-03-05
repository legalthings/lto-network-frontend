import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ImportAccountComponent } from './import-account.component';
import { By } from '@angular/platform-browser';
import { SharedModule } from '../../shared';
import { PasswordFormFieldModule } from '../components/password-form-field/password-form-field.module';
import { LocalAccountsService, AuthService } from '../../core';

fdescribe('auth/ImportAccountComponent', () => {
  let component: ImportAccountComponent;
  let fixture: ComponentFixture<ImportAccountComponent>;
  let localAccounts: LocalAccountsService;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, PasswordFormFieldModule],
      declarations: [ImportAccountComponent],
      providers: [
        {
          provide: LocalAccountsService,
          useValue: {} as Partial<LocalAccountsService>
        },
        {
          provide: AuthService,
          useValue: {} as Partial<AuthService>
        }
      ]
    }).compileComponents();

    localAccounts = TestBed.get(LocalAccountsService);
    authService = TestBed.get(AuthService);

    fixture = TestBed.createComponent(ImportAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should disable Login button if no local accounts presented', () => {
    const loginLink = fixture.debugElement.query(By.css('.login-link'));
  });
});

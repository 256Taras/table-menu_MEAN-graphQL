import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFromUiComponent } from './login-from-ui.component';

describe('LoginFromUiComponent', () => {
  let component: LoginFromUiComponent;
  let fixture: ComponentFixture<LoginFromUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFromUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFromUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

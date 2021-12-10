import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mean-login-from-ui',
  templateUrl: './login-from-ui.component.html',
  styleUrls: ['./login-from-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFromUiComponent implements OnInit {

  public loginForm!: FormGroup;

  @Output()
  public login = new EventEmitter()

  public ngOnInit(): void {
    this._validate()
  }

  public onSubmit(): void {
    this.login.emit(this.loginForm.value)
  }

  private _validate (): void {
    this.loginForm = new FormGroup({
      login: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

}

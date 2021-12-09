import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mean-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  public ngOnInit(): void {
    return;
  }

  public onLogin(loginPayload: { login: string, password: string }): void {
    console.log('login in login block', loginPayload);
  }

}

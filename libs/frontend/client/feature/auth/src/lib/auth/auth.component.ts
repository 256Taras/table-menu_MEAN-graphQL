import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IAuthFacade } from '@mean/frontend/shared/data-access/auth-store';
import { ISignAuthPayload } from '@mean/shared/utils/interfaces';

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

  constructor(public authFacade: IAuthFacade) {
  }

  public onLogin(loginPayload: ISignAuthPayload): void {
    console.log('login in login block', loginPayload)
    this.authFacade.signInSet(loginPayload)
    // this.authFacade.signIn()
  }
}

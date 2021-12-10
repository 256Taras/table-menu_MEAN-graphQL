import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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

  public onLogin(loginPayload: ISignAuthPayload): void {
    console.log('login in login block', loginPayload);
  }

}

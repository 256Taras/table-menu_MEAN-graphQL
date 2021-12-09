import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IUsersFacade } from '@mean/frontend/shared/data-access/user-store';

@Component({
  selector: 'mean-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {
  constructor(public userFacade: IUsersFacade) {
    this.userFacade.loadUser();
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IUserFacade } from '@mean/frontend/shared/data-access/user-store';

@Component({
  selector: 'mean-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements OnInit {
  constructor(private userFacade: IUserFacade) {
  }

  ngOnInit(): void {
    this.userFacade.loadUser()
  }

}

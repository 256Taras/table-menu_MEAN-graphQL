import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ApolloError } from '@apollo/client/core';

import { IUser, Nullable } from '@mean/shared/utils/interfaces';


@Component({
  selector: 'mean-user-profile-ui',
  templateUrl: './user-profile-ui.component.html',
  styleUrls: ['./user-profile-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileUiComponent {

  @Input()
  user: Nullable<IUser>;

  @Input()
  failure: Nullable<ApolloError>;


}

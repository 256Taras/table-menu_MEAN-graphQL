import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'mean-user-profile-ui',
  templateUrl: './user-profile-ui.component.html',
  styleUrls: ['./user-profile-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileUiComponent implements OnInit {

  ngOnInit(): void {
    return;
  }

}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mean-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],

  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {

  ngOnInit(): void {
    return
  }

}

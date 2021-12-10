import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mean-navbar-ui',
  templateUrl: './navbar-ui.component.html',
  styleUrls: ['./navbar-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarUiComponent implements OnInit {
  ngOnInit(): void {
    return;
  }
}

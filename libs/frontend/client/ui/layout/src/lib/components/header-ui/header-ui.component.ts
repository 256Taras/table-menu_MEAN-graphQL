import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mean-header-ui',
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderUiComponent implements OnInit {
  ngOnInit(): void {
    return;
  }
}

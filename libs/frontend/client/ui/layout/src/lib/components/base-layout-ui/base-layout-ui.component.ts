import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'mean-base-layout-ui',
  templateUrl: './base-layout-ui.component.html',
  styleUrls: ['./base-layout-ui.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaseLayoutUiComponent implements OnInit {
  ngOnInit(): void {
    return;
  }
}

import { ComponentType } from '@angular/cdk/overlay';

import { BaseLayoutUiComponent } from './lib/components/base-layout-ui/base-layout-ui.component';
import { NavbarUiComponent } from './lib/components/navbar-ui/navbar-ui.component';
import { HeaderUiComponent } from './lib/components/header-ui/header-ui.component';

export const baseLayoutContainers: ComponentType<BaseLayoutUiComponent | NavbarUiComponent | HeaderUiComponent>[] = [
  BaseLayoutUiComponent,
  NavbarUiComponent,
  HeaderUiComponent
];

import { Routes } from '@angular/router';
import { ComponentType } from '@angular/cdk/overlay';

import { HomePageComponent } from './home-page/home-page.component';
import { BaseLayoutUiComponent } from '@mean/frontend/ui/components';

export const homeRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutUiComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      }
    ]
  }
];

export const homeContainers: ComponentType<HomePageComponent>[] = [HomePageComponent];

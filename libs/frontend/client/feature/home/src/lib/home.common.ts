import { Routes } from '@angular/router';
import { ComponentType } from '@angular/cdk/overlay';

import { HomePageComponent } from './home-page/home-page.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

export const homeContainers: ComponentType<HomePageComponent>[] = [HomePageComponent];

import { Routes } from '@angular/router';
import { ComponentType } from '@angular/cdk/overlay';

import { HomePageComponent } from './home-page/home-page.component';
import { BaseLayoutUiComponent } from '@mean/frontend/client/layout';

export const homeRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutUiComponent,
    children: [
      {
        path: '',
        component: HomePageComponent,
      },
      {
        path: 'auth',
        // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
        loadChildren: () =>
          import('@mean/frontend/client/feature/auth').then(
            (m) => m.AuthModule
          ),
      },
      {
        path: 'user-profile',
        // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
        loadChildren: () =>
          import('@mean/frontend/client/feature/user-profile').then(
            (m) => m.UserProfileModule
          ),
      },
    ],
  },
];

export const homeContainers: ComponentType<HomePageComponent>[] = [
  HomePageComponent,
];

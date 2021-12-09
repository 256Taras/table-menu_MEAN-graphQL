import { Routes } from '@angular/router';
import { ComponentType } from '@angular/cdk/overlay';

import { HomePageComponent } from './home-page/home-page.component';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BaseLayoutUiComponent } from '@mean/frontend/client/ui/layout';

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
        loadChildren: () =>
          // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
          import('@mean/frontend/client/feature/auth').then(
            (m) => m.AuthModule
          ),
      },
      {
        path: 'user-profile',
        loadChildren: () =>
          // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
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

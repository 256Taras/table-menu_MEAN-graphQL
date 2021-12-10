import { Routes } from '@angular/router';
import { ComponentType } from '@angular/cdk/overlay';

import { HomePageComponent } from './home-page/home-page.component';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { BaseLayoutUiComponent } from '@mean/frontend/client/ui/layout';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthComponent } from '@mean/frontend/client/feature/auth';

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
        component: AuthComponent
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

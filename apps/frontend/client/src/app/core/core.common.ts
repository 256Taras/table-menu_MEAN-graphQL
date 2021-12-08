import { ComponentType } from '@angular/cdk/overlay';
import { AppComponent } from './comonents/app/app.component';
import { Routes } from '@angular/router';

export const coreRoutes:Routes = [
  {
    path: "",
    loadChildren: ()=> import('@mean/frontend/client/feature/home').then(m => m.HomeModule)
  }
]


export const coreContainers: ComponentType<AppComponent>[] = [AppComponent];

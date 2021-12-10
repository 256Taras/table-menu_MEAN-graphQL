import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromAuth from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';

import { BaseAuthFacade } from './services/base-auth.facade';
import { BaseAuthApolloService } from './services/base-auth-apollo.service';
import { BaseAuthStorageService } from './services/base-auth-storage.service';

import { IAuthStoreOptions } from './interfaces/auth-store-option.interface';
import { IAuthStorage } from './interfaces/auth-storage.interface';
import { IAuthApollo } from './interfaces/auth-apollo.interface';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { IAuthFacade } from './interfaces/auth-facade.interface';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAuth.AUTH_FEATURE_KEY, fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  providers: [BaseAuthFacade]
})
export class AuthStoreModule {
  static forRoot(options: Partial<IAuthStoreOptions> = {}): ModuleWithProviders<AuthStoreModule> {
    return {
      ngModule: AuthStoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true
        },
        {
          provide: IAuthFacade,
          useClass: options.facade || BaseAuthFacade
        },
        {
          provide: IAuthStorage,
          useClass: options.storage || BaseAuthStorageService
        },
        {
          provide: IAuthApollo,
          useClass: options.apollo || BaseAuthApolloService
        }
      ]
    };
  }
}

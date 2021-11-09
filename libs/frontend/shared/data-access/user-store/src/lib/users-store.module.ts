import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { IUserApollo } from './interfaces/user-apollo.interface';
import { IUserFacade } from './interfaces/user-facade.interface';
import { IUserStoreOptions } from './interfaces/user-store-option.interface';

import * as fromUser from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';
import { UserFacade } from './+state/user.facade';

import { UserApolloService } from './services/user-apollo.service';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UsersStoreModule {
  static forRoot(options: Partial<IUserStoreOptions> = {} ): ModuleWithProviders<UsersStoreModule> {
    return {
      ngModule: UsersStoreModule,
      providers: [
        {
          provide: IUserApollo,
          useClass: options.apollo || UserApolloService,
        },
        {
          provide: IUserFacade,
          useClass: options.facade || UserFacade,
        },
      ],
    }
  }
}


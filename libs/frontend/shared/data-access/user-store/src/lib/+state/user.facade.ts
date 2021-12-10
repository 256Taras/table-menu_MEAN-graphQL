import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ApolloError } from '@apollo/client';
import { IUser } from '@mean/shared/utils/interfaces';

import { IUsersFacade } from '../interfaces/user-facade.interface';
import { IUserStoreFeatureKey } from '../interfaces/user.store.feature-key.interface';

import * as UserSelectors from './user.selectors';
import * as UserAction from './user.actions';

/**
 * User store facade
 */
@Injectable()
export class UsersFacade implements IUsersFacade {

  /**
   * get user entity
   */
  public user$ = this.store.pipe(select(UserSelectors.getUser)) as Observable<IUser>;

  /**
   * get user load status
   */
  public userLoadRun$ = this.store.pipe(select(UserSelectors.getUserLoadRun));

  /**
   * get user load error
   */
  public userLoadFailure$ = this.store.pipe(select(UserSelectors.getUserLoadFailure)) as Observable<ApolloError>;

  constructor(private store: Store<IUserStoreFeatureKey>) {}

  /**
   * init(dispatch) action userLoad
   * @param force
   */
  loadUser(force?: boolean): void {
    this.store.dispatch(UserAction.loadUser({ payload: { force } }));
  }

}

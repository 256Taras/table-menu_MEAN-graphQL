import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { IAuthFacade } from '../interfaces/auth-facade.interface';

import * as AuthSelectors from '../+state/auth.selectors';
import * as AuthActions from '../+state/auth.actions';
import { IAuthStoreFeatureKey } from '../interfaces/auth-store.feature-key.interface';
import { ISignAuthPayload } from '@mean/shared/utils/interfaces';

@Injectable()
export class BaseAuthFacade implements IAuthFacade {
  public signIn$ = this.store.pipe(select(AuthSelectors.getSignIn));
  public signInError$ = this.store.pipe(select(AuthSelectors.getSignInFailure));
  public signInRun$ = this.store.pipe(select(AuthSelectors.getSignInRun));
  public signOutError$ = this.store.pipe(select(AuthSelectors.getSignOutFailure));
  public signOutRun$ = this.store.pipe(select(AuthSelectors.getSignOutRun));

  constructor(private store: Store<IAuthStoreFeatureKey>) {
  }

  public signIn(force?: boolean): void {
    this.store.dispatch(AuthActions.signIn({ payload: { force } }));
  }

  public signInClear(): void {
    this.store.dispatch(AuthActions.signInClear());
  }

  public signInSet(payload: ISignAuthPayload): void {
    this.store.dispatch(AuthActions.signInSet({ payload }));
  }

  public signOut(force?: boolean): void {
    this.store.dispatch(AuthActions.signOut({ payload: { force } }));
  }

}

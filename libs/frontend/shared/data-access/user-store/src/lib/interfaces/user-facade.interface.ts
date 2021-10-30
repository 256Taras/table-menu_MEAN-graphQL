import { Observable } from 'rxjs';
import { ApolloError } from '@apollo/client';

import { IUser } from '@mean/shared/utils/interfaces';

/**
 * User facade
 */
export abstract class IUserFacade {

  /**
   *  User entity observer
   */
  public user$?: Observable<IUser>;

  /**
   * User load run observable
   */
  public userLoadRun$!: Observable<boolean>;

  /**
   * User load error observable
   */
  public userLoadFailure$!: Observable<ApolloError>;

  /**
   * Load user action(dispatch)
   * @param force Force
   */
  public abstract loafUser(force?: boolean): void;
}

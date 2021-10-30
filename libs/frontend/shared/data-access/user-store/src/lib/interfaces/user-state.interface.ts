import { IUser } from '@mean/shared/utils/interfaces';
import { ApolloError } from '@apollo/client';

export interface IUserState {

  /**
   * User entity
   */
  user: IUser | null;

  /**
   * User load status
   */
  userLoadRun: boolean;

  /**
   * User load error
   */
  userLoadFailure: ApolloError | null

}

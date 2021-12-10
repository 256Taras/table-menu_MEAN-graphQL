import { ApolloError } from '@apollo/client';
import { ISignAuthPayload, Nullable } from '@mean/shared/utils/interfaces';

/**
 * Login-logout auth interface
 */
export interface IAuthState {

  /**
   * Login action data
   */
  signIn: Nullable<ISignAuthPayload>;

  /**
   * Login action status
   */
  signInRun: boolean;

  /**
   * Login action error
   */
  signInError: Nullable<ApolloError>;

  /**
   * Logout action status
   */
  signOutRun: boolean;

  /**
   * Logout action error
   */
  signOutError: Nullable<ApolloError>;
}

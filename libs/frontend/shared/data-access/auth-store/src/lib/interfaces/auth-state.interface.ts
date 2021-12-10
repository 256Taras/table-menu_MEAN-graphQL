import { ApolloError } from '@apollo/client';
import { ISignAuthPayload } from '@mean/shared/utils/interfaces';

/**
 * Login-logout auth interface
 */
export interface IAuthState {

  /**
   * Login action data
   */
  signIn: ISignAuthPayload;

  /**
   * Login action status
   */
  signInRun: boolean;

  /**
   * Login action error
   */
  signInError: ApolloError;

  /**
   * Logout action status
   */
  signOutRun: boolean;

  /**
   * Logout action error
   */
  signOutError: ApolloError;
}

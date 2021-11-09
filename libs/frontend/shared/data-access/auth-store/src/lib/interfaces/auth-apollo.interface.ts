import { ISignAuthResponse, TApolloResponse } from '@mean/shared/utils/interfaces';

/**
 * Auth Apollo interface
 */
export abstract class IAuthApollo {

  /**
   *
   * Login
   *
   * @param payload
   * @param queryParams
   */
  public abstract signIn(payload:ISignAuthResponse, queryParams?:Record<string, unknown>):TApolloResponse<ISignAuthResponse>

  /**
   *
   * Logout
   *
   * @param queryParams
   */
  public abstract signOut(queryParams?:Record<string, unknown>):TApolloResponse<void>
}

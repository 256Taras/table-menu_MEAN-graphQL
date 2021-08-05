import { Action } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export abstract class AbstractEffects<T> {


  /**
   *
   * Return "partial" state from feature_key
   *
   * @param state Root state
   * @param key Feature key
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getState<S = T>(state: any, key?: string): S {
    return state[key || this.key];
  }

  /**
   *
   * @param action
   * @param error
   * @param responseAction
   * @param debug - waiting boolean flag
   */

  public errorHandler(
    action: Action,
    error: Record<string, unknown> = {},
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    responseAction?: (payload?: any) => TypedAction<any>,
    debug = false): Action | never {

    if (debug) {
      console.log(error);
    }

    if (responseAction()) {
      return responseAction({ payload: error });
    }
  }


  protected constructor(protected readonly key: string) {
  }
}

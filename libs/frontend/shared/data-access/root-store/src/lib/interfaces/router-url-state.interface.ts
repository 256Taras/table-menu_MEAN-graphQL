/**
 * Router state URL
 */
import { Params } from '@angular/router';

export interface IRouterUrlState {
  /**
   * URL
   */

  url: string;

  /**
   * Router params
   */
  params: Params;

  /**
   * Router que ry params
   */
  queryParams: Params;
}

import { RouterStateSerializer } from '@ngrx/router-store';
import { IRouterUrlState } from '../interfaces/router-url-state.interface';
import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';

@Injectable()
export class StoreRouterStateSerializer implements RouterStateSerializer<IRouterUrlState>{
  serialize(routerState: RouterStateSnapshot): IRouterUrlState {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams },
    } = routerState;
    const { params } = route;

    // Only return an object including the URL, params and query params
    // instead of the entire snapshot
    return { url, params, queryParams };
  }
}

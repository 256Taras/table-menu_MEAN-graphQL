import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { catchError, map } from 'rxjs/operators';
import { ApolloError } from '@apollo/client';

import { throwError } from 'rxjs';

import { ExtractApolloResponse, ISignAuthResponse, IUser, TApolloResponse } from '@mean/shared/utils/interfaces';
import { IAuthApollo } from '../interfaces/auth-apollo.interface';
import * as AuthQueries from '../graphql/auth.queries';

@Injectable()
export class BaseAuthApolloService implements IAuthApollo {

  constructor(private readonly apollo: Apollo) {
  }

  public signIn(payload: ISignAuthResponse, queryParams: Record<string, unknown> = {}): TApolloResponse<ISignAuthResponse> {
    return this.apollo
      .query<{ user: IUser }>({ query: AuthQueries.loginRequest.query, variables: payload })
      .pipe(
        map(result => ExtractApolloResponse(result, AuthQueries.loginRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      );
  }

  public signOut(queryParams?: Record<string, unknown>): TApolloResponse<void> {
    return this.apollo
      .query<{ logout: boolean }>({ query: AuthQueries.logoutRequest.query })
      .pipe(
        map(() => undefined),
        catchError((error: ApolloError) => throwError(error))
      );
  }
}

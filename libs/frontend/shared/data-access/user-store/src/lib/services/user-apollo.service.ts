import { ApolloError } from '@apollo/client';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Apollo } from 'apollo-angular';

import { ExtractApolloResponse, IUser, TApolloResponse } from '@mean/shared/utils/interfaces';

import { IUserApollo } from '../interfaces/user-apollo.interface';

import * as UserQueries from '../graphql/user.queries';

export class UserApolloService implements IUserApollo {
  constructor(private readonly apollo: Apollo) {
  }
  public loadUser(queryParams: Record<string, unknown> = {}): TApolloResponse<IUser> {
    return this.apollo.query<{ user: IUser }>({ query: UserQueries.userRequest.query })
      .pipe(
        map((result) => ExtractApolloResponse(result, UserQueries.userRequest.keys)),
        catchError((error: ApolloError) => throwError(error))
      );
  }
}

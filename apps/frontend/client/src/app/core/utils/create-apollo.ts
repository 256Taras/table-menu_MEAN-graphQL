import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

import { environment } from '../../../environments/environment';

export function createApollo(httpLink: HttpLink) {

  return {
    cache: new InMemoryCache(),
    link: httpLink.create({
      uri: environment.graphql.uri
    })
  };

}

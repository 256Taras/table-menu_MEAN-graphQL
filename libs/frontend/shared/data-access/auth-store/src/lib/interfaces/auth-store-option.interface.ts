import { Type } from '@angular/core';

import { IAuthStorage } from './auth-storage.interface';
import { IAuthApollo } from './auth-apollo.interface';

export interface IAuthStoreOption {


  /**
   * Auth Apollo
   */
  apollo:Type<IAuthApollo>

  /**
   * Auth storage
   */
  storage: Type<IAuthStorage>;
}

import { Type } from '@angular/core';

import { IAuthStorage } from './auth-storage.interface';

export interface IAuthStoreOption {

  /**
   * Auth storage
   */
  storage: Type<IAuthStorage>;
}

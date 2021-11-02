import { Injectable } from '@angular/core';

import { IAuthStorage } from '../interfaces/auth-storage.interface';
import { ILocalStorage } from '@mean/shared/utils/interfaces';


/**
 * Key interface
 */
interface IKey {
  [key: string]: string;
}

/**
 * Key auth-storage
 */
export const authStorageKey: IKey = {
  accessToken: 'auth'
};

/**
 * Base auth-storage implementation
 */
@Injectable()
export class BaseAuthStorageService implements IAuthStorage {
  constructor(private storage: ILocalStorage) {
  }

  /**
   * Clear all value of auth storage
   */
  public clear(): void {
    for (const prop of Object.keys(authStorageKey)) {
      this.storage.removeItem(prop);
    }
  }

  /**
   * Get access token from auth-storage
   */
  public getAccessToken(): string | null {
    return this.storage.getItem(authStorageKey.accessToken) || null;
  }

  /**
   * Remove access token from auth-storage
   */
  public removeAccessToken(): void {
    this.storage.removeItem(authStorageKey.accessToken);
  }

  /**
   * Set access token from auth-storage
   *
   * @param accessToken Access Token
   */
  public setAccessToken(accessToken: string): void {
    this.storage.setItem(authStorageKey.accessToken, accessToken);
  }
}

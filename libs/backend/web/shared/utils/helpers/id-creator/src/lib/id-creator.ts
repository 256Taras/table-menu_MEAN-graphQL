import * as cuid from 'cuid';

export class IdCreator {
  public static makeId(): string {
    return cuid();
  }

  public static isValidId(value: string): boolean {
    return cuid.isCuid(value);
  }
}

/**
 * The Storage interface of the Web Storage API provides
 * access to a particular domain's session or local storage.
 *
 * It allows, for example, the addition, modification,
 * or deletion of stored data items.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Storage
 */

export abstract class IStorage implements Storage {

  public readonly length: number;

  public abstract clear(): void

  public abstract getItem(key: string): string | null

  public abstract key(index: number): string | null

  public abstract removeItem(key: string): void

  public abstract setItem(key: string, value: string): void

}

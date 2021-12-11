import { Injectable } from '@nestjs/common';
import * as cuid from 'cuid';

@Injectable()
export class IdService {
  public makeId(): string {
    return cuid();
  }

  public isValidId(value: string): boolean {
    return cuid.isCuid(value);
  }
}

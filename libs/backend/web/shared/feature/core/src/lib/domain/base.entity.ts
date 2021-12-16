import { AggregateRoot } from '@nestjs/cqrs';
import { IdCreator } from '@mean/backend/web/shared/utils/helpers/id-creator';

const isEntity = (v: any): v is BaseEntity<any> => {
  return v instanceof BaseEntity;
};

export abstract class BaseEntity<T> extends AggregateRoot {
  protected readonly _id: string;
  public readonly _props: T;

  protected constructor(props: T, id?: string) {
    super();
    this._id = id ? id : IdCreator.makeId();
    this._props = props;
  }

  public equals(object?: BaseEntity<T>): boolean {
    if (object == null) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    return this._id === object._id;
  }
}

import { Inject } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { IUser } from '@mean/shared/utils/interfaces';
import { UserEntity } from '@mean/backend/web/users/feature';


export class UserFactory {
  constructor(
    @Inject(EventPublisher) private readonly eventPublisher: EventPublisher
  ) {
  }

  public create(props: Partial<IUser>): UserEntity {
    return this.eventPublisher.mergeObjectContext(new UserEntity(props));
  }

  public  reconstitute(properties): UserEntity {
    return this.eventPublisher.mergeObjectContext(new UserEntity(properties));
  }
}

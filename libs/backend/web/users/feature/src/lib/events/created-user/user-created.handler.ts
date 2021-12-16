import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { UserCreatedEvent } from './user-created.event';


@EventsHandler(UserCreatedEvent)
export class UserCreatedHandler implements IEventHandler<UserCreatedEvent> {

 public handle(event: any) {
    console.log(event);
  }
}

import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

import { UserCreatedEvent } from '../events/created-user/user-created.event';
import { SendConfirmToUserCommand } from '../commands/send-confirm-to-user/send-confirm-to-user.command';


@Injectable()
export class UsersSagas {
  @Saga()
  public userCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(UserCreatedEvent),
      delay(1000),
      map(event => {
        console.log("user saga work",event);
        return new SendConfirmToUserCommand("userId");
      })
    );
  };
}

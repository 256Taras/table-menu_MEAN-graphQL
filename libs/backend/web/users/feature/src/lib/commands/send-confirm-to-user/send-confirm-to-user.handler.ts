import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';


import { SendConfirmToUserCommand } from './send-confirm-to-user.command';

@CommandHandler(SendConfirmToUserCommand)
export class SendConfirmToUserHandler implements ICommandHandler<SendConfirmToUserCommand> {

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  public async execute(command: SendConfirmToUserCommand): void {
    console.log('SendConfirmToUserHandler');

  }
}

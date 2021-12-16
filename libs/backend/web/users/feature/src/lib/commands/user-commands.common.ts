import { Provider } from '@nestjs/common';
import { CreateUserHandler } from './create-user/create-user.handler';
import { SendConfirmToUserHandler } from './send-confirm-to-user/send-confirm-to-user.handler';

export type TCommands = Provider<any>[];

export const UserCommandsCommon: TCommands = [CreateUserHandler, SendConfirmToUserHandler];

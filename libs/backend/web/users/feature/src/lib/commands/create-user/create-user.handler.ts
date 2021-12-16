import { BadRequestException, InternalServerErrorException, Logger } from '@nestjs/common';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { left, right } from 'fp-ts/lib/Either';


import { UserPassword } from '../../domain/user-password.';
import { CreateUserCommand } from './create-user.command';

import { UserRepository } from '@mean/backend/web/users/data-access';
import { TCreateUserResult } from '@mean/backend/web/users/utils';
import { UserFactory } from '../../domain/user.factory';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {

  public constructor(
    private readonly userRepository: UserRepository,
    private readonly userFactory: UserFactory,
  ) {
  }

  public async execute(command: CreateUserCommand): TCreateUserResult {
    try {
      const { email, username, password, passwordConfirm } = command.payload;

      const passwordOrError = UserPassword.create({ value: password });

      const existUserByEmail = await this.userRepository.findByEmail(email);

      if (existUserByEmail) {
        return left(new BadRequestException('user with that email already use'));

      }

      if (password !== passwordConfirm) {
        return left(new BadRequestException('password and passwordConfirm not match'));
      }

      if (passwordOrError.isFailure) {
        return left(new BadRequestException('password to short'));
      }

      const props = {
        email: email.toLowerCase(),
        nickname: '',
        phone: '',
        password: passwordOrError.getValue().value,
        username
      };
      const user = this.userFactory.create(props)

      const created = await this.userRepository.save(user);

      user.wasCreated()

      user.commit()

      if (created) {
        return right(null);
      }
    } catch (err) {
      return left(new InternalServerErrorException(err));
    }
  }
}

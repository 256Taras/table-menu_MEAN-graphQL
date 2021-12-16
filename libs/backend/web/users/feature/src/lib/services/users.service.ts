import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserCommand } from '../commands/create-user/create-user.command';

import { OrmUserEntity } from '@mean/backend/web/users/data-access';
import { TCreateUserResult } from '@mean/backend/web/users/utils';


/**
 * UsersService find or create user from userRepository
 */
@Injectable()
export class UsersService {
  /**
   * Inject into UsersService: userRepository
   * Inject nest command bus: CommandBus
   * @param userRepository
   * @param commandBus
   */
  constructor(
    @InjectRepository(OrmUserEntity)
    private readonly userRepository: Repository<OrmUserEntity>,
    private readonly commandBus: CommandBus
  ) {
  }

  /**
   * Find all users from userRepository
   */
  async find(): Promise<OrmUserEntity[]> {
    return await this.userRepository.find();
  }

  /**
   * Find user by id from userRepository
   *
   * @param id
   */
  async findOneById(id: number): Promise<OrmUserEntity> {
    return await (this.userRepository.findOne(id)) || null;
  }

  /**
   * Find user by username from userRepository
   *
   * @param username
   */
  async findOneByUserName(username: string): Promise<OrmUserEntity> {
    const users = await this.userRepository.find({ username });

    return users.length === 1 ? users[0] : null;
  }

  /**
   * Create new user into userRepository
   *
   * @param payload provides candidate of new user into userRepository
   */
  async createUser(payload): TCreateUserResult {
    const command = new CreateUserCommand(payload);
    return this.commandBus.execute(command);
  }

}

import {Injectable} from "@angular/core";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

import {UserEntity} from "../entities/user.entity";


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {
  }

  public async find(): Promise<UserEntity[]> {
    return await this.userRepository.find()
  }

  public async findOneById(id:number): Promise<UserEntity[]> {
    return await (this.userRepository.find({id})) || null
  }

  public async findOneByUserName(username: string): Promise<UserEntity> {
    const user = await this.userRepository.find({username})

    return user.length === 1 ? user[0] : null
  }

  async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
    const newUser = await this.userRepository.create(user)

    return this.userRepository.create(newUser)
  }

}

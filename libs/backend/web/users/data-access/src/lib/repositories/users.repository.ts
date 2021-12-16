import { getConnection } from 'typeorm';

import { OrmUserEntity } from '../orm-entities/orm-users.entity';

import { Injectable } from '@nestjs/common';
import { IUser } from '@mean/shared/utils/interfaces';

import { IUserEntity, IUserRepository } from '@mean/backend/web/users/utils';

@Injectable()
export class UserRepository implements IUserRepository {

  public async find(page = 0, pagesize = 20): Promise<[(null | IUser)[], number]> {
    const query = getConnection()
      .createQueryBuilder()
      .select('user')
      .from(OrmUserEntity, 'user');

    if (pagesize) {
      query.take(pagesize).skip(page * pagesize);
    }

    const [users, count] = await query.getManyAndCount();
   // const results = users.map(user => this.ormEntityToDomainEntity(user));

    return [users, count];
  }

  public async findByEmail(email: string): Promise<IUser | null> {
    return  await getConnection()
      .createQueryBuilder()
      .select('user')
      .from(OrmUserEntity, 'user')
      .where('user.email = :email', { email })
      .getOne();
  }

  public async save(props: IUser): Promise<Date | null> {
    const row = await getConnection()
      .createQueryBuilder()
      .insert()
      .into(OrmUserEntity)
      .values([
        {
          id: props.id,
          email: props.email,
          username: props.username,
          password: props.password
        }
      ])
      .execute();
    const user = row?.raw[0];
    return user?.created;
  }

  public async update(id: string, props: IUserEntity): Promise<Date | null> {
    const row = await getConnection()
      .createQueryBuilder()
      .update(OrmUserEntity)
      .set({
        id: props.id,
        email: props.email,
        username: props.username,
        password: props.password
      })
      .where('id = :id', { id })
      .execute();
    const user = row?.raw[0];
    return user?.updated_at;
  }

}

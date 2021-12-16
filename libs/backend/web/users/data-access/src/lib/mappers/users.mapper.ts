// import { IUserEntity } from '@mean/backend/web/users/utils';
// import { IUser } from '@mean/shared/utils/interfaces';
// import { OrmUsersEntity } from '@mean/backend/web/users/data-access';
// import { UserEntity } from '@mean/backend/web/users/feature';
// import { UserPassword } from '../../../../feature/src/lib/domain/user-password.';
//
// export class UsersMapper {
//   static mapToDomain(
//     rawOrmUserEntity: IUser
//   ): IUser {
//     const userPasswordOrError = UserPassword.create({ value: rawOrmUserEntity.password, hashed: true });
//
//     const userOrExeption = UserEntity.create({
//       id: rawOrmUserEntity.id,
//       email: rawOrmUserEntity.email,
//       phone: rawOrmUserEntity.phone,
//       username: rawOrmUserEntity.username,
//       password: userPasswordOrError.getValue(),
//       nickname: rawOrmUserEntity.nickname
//     } as unknown as IUser);
//
//     return userOrExeption.isSuccess ? userOrExeption.getValue() : null;
//   }
//
//   static toPersistence (userEntity: IUserEntity): IUser {
//     const props = userEntity.props();
//     const ormUserModel = new OrmUsersEntity();
//
//     ormUserModel.username = props.username;
//     ormUserModel.email = props.email;
//     ormUserModel.password = props.password;
//     ormUserModel.created = props.created;
//     ormUserModel.updated = props.updated;
//
//     if (props.id !== null) {
//       ormUserModel.id = props.id;
//     }
//     return ormUserModel;
//   }
// }

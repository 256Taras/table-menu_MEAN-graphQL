import { IUser } from '@mean/shared/utils/interfaces';

export interface IUserRepository {
  save: (data: IUser | IUser[]) => Promise<Date | null>;
  update: (id: string, data: IUser) => Promise<null | Date>;
  find: (page: number, pageSize: number) => Promise<[(null | IUser)[], number]>;
  findByEmail: (email: string) => Promise<IUser | null>;
}

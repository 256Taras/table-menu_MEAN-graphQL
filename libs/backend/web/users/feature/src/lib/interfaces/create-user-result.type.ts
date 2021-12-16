import { Either } from 'fp-ts/Either';
import { BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { IUser } from '@mean/shared/utils/interfaces';

export type TCreateUserResult = Promise<Either<BadRequestException | InternalServerErrorException, IUser>>

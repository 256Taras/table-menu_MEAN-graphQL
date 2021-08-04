import { createAction } from '@ngrx/store';
import { ApolloError } from '@apollo/client';

import { UserTypes } from './user.action-types';
import { payload, payloadForce } from '@mean/shared/utils/store';
import { IUser } from '@mean/shared/utils/interfaces';



export const loadUser = createAction(UserTypes.LoadUser, payloadForce())
export const loadUserCancel = createAction(UserTypes.LoadUserCancel)
export const loadUserRun = createAction(UserTypes.LoadUserRun)
export const loadUserSuccess = createAction(UserTypes.LoadUserSuccess, payload<IUser>())
export const loadUserFailure = createAction(UserTypes.LoadUserFailure, payload<ApolloError>())


import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import { ISignUpPayload } from '@mean/shared/utils/interfaces';

export const SingIn = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const args = ctx.getArgs()[1]

  return {username: args.username, password: args.password}
})

export const SingUp = createParamDecorator((data: unknown, ctx: ExecutionContext):ISignUpPayload => {
  const args = ctx.getArgs()[1]

  return {username: args.input.username, email: args.input.email,  password: args.input.password, passwordConfirm: args.input.passwordConfirm}
})

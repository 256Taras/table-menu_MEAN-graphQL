import {createParamDecorator, ExecutionContext} from "@nestjs/common";

export const SingIn = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const args = ctx.getArgs()[1]

  return {username: args.username, password: args.password}
})

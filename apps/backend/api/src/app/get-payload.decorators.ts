import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Payload = createParamDecorator((field: string, ctx: ExecutionContext) => {
  const args = ctx.getArgs()[1];

  return {
    ...(field ? args[field] : args)
  };
});

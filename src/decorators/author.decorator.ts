import { applyDecorators, Body, createParamDecorator, ExecutionContext } from "@nestjs/common";
import { Request, Response } from 'express';


export const Author = createParamDecorator((
  (isOld: boolean, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    const response: Response = ctx.switchToHttp().getResponse()
    isOld=Boolean(request.body.id);
    request.body = {
      ...request.body,
      updatedBy: (<any>response).user.id,
      ...(isOld ? {} : { createdBy: (<any>response).user.id })
    };
    return request.body
  }
));

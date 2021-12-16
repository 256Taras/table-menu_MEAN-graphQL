import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isRight } from 'fp-ts/These';
import { Either } from 'fp-ts/lib/Either';


type TBaseResponse<T> = Either<T, T>

@Injectable()
export class EitherInterceptor<T> implements NestInterceptor<T, TBaseResponse<T>> {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<TBaseResponse<T>> {
    return next.handle().pipe(map((data) => isRight(data) ? data.right : data.left));
  }
}

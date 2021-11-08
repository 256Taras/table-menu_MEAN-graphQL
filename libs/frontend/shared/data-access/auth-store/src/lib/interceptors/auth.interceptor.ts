import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';

import { IAuthStorage } from '../interfaces/auth-storage.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private readonly authStore: IAuthStorage) {}

  public intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.authStore.getAccessToken();

    if (accessToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      });
    }

    return next.handle(req);
  }
}

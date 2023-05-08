import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {mergeMap, delay, retryWhen} from 'rxjs/operators';

import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { DataService } from './data.service';

export const maxRetries = 2;
export const delayMs = 2000;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private loginService: LoginServiceService,
    private dataService: DataService,
    private router: Router
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retryWhen((error) => {
        return error.pipe(
          mergeMap((error, index) => {
            console.log(error)
            if (index < maxRetries && error.status == 401) {
              this.loginService.logout();
              this.dataService.isLogged = false;
              this.router.navigate(['']);
              // return of(error).pipe(delay(delayMs));
            }

            throw error;
          })
        )
        })
    )
  }
}
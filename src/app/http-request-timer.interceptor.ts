import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HttpRequestTimerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const start = new Date().getTime();

    return next.handle(request)
      .pipe(
        tap((response) => {
          if(response instanceof HttpResponse){
            const elapsed = new Date().getTime() - start;
            console.log('TIME FOR THE RESPONSE TO COME BACK FROM THE SERVER: ', elapsed)
          }
        })
      )
  }


}

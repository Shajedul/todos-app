import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from '@angular/common/http';
import { ApiService } from './api.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let apiservice = this.injector.get(ApiService);
    const newReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${apiservice.getToken()}`
      }
    });
    return next.handle(newReq);
  }
}

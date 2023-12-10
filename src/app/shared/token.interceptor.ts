import { Injectable } from '@angular/core';

import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

// import {Http} from '@angular/http';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.auth.getToken();
debugger
        if (token) {
      
            request = request.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
        
            });
        }
debugger
        return next.handle(request);
    }
}
//@desc inspect and transform HTTP requests before they are sent to server

import {HTTP_INTERCEPTORS,HttpEvent} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from '../_services/token-storage.service';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'x-access-token';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private token:TokenStorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
        let authReq=req;
        const token=this.token.getToken();
        if(token !=null){
            authReq=req.clone({headers:req.headers.set(TOKEN_HEADER_KEY,token)})
        }
        return next.handle(authReq).pipe(
            catchError((error)=>{
                console.log('error is intercept');
                console.error(error);
                return throwError(error.message);
            })
        );
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];
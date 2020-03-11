import { Injectable } from '@angular/core';
import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable()
export class InterceptService implements HttpInterceptor {

    constructor() { }

    // intercept request and add token
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
        });

        return next.handle(request)
            .pipe(catchError((error, caught) => {
                this.handleAuthError(error);
                return (error);
            }) as any,
                tap(event => {
                    if (event instanceof HttpResponse) {
                      console.log(event.headers.get('Authorization'));
                    }
                })
            );
    }

    private handleAuthError(err: HttpErrorResponse): String {
        switch (err.status) {
            case 0: {
                this.semInternet();
                break;
            }
            case 504: {
                this.servidorIndisponivel();
                break;
            }
            case 401: {
                this.semAutorizacao();
                break;
            }
        }
        throw err;
    }

    private semInternet() {
    }

    private semAutorizacao() {

    }

    private servidorIndisponivel() {
    }
}

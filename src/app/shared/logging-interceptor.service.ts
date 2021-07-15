import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';

export class LoggingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log('Request method: ' + req.method + ' and url is: ' + req.url);
    return next.handle(req);
  }
}

import { HttpInterceptorFn } from '@angular/common/http';

export const authorizationInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'apikey 4NBCWQ74O8WzQRc6MO4LRV:0uOJIIuEGq2IbFnM4rooeo'
    }
  })
  return next(authReq);
};
// auth.interceptor.ts
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  // Read token directly from localStorage to avoid signal timing issues
  const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;

  console.log('Interceptor called for URL:', req.url);
  console.log('Token from localStorage:', token);

  // Only add Authorization header if token exists and is not empty/undefined string
  if (token && token.trim() && token !== 'undefined') {
    console.log('Adding Authorization header');
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq);
  }

  console.log('No token found, proceeding without Authorization header');
  return next(req);
};

import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { omit } from 'lodash';
import { AuthRes, AuthUser } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private router = inject(Router);

  token = signal<string | null>(null);
  user = signal<AuthUser | null>(null);

  private readonly apiUrl = 'https://dummyjson.com/auth/login';

  constructor() {
  this.loadUserTokenFromLocalStorage();
}

 loadUserTokenFromLocalStorage(): void {
  const storedUser = localStorage.getItem('user');
  const storedToken = localStorage.getItem('token');

  if (storedUser && storedToken) {
    this.user.set(JSON.parse(storedUser));
    this.token.set(storedToken);
  }
}


  login(username: string, password: string): Observable<AuthRes> {
    return this.http.post<AuthRes>(this.apiUrl, { username, password }).pipe(
      tap((res) => {
        // Stockage dans localStorage
        localStorage.setItem('token', res.token);

        // Mise à jour des signaux
        this.token.set(res.token);
        this.setUser(res)
      })
    );
  }
  setUser(res:AuthRes){
    
  localStorage.setItem(
  'user',
  JSON.stringify(omit(res, ['token', 'refreshToken']))
);

// Mise à jour des signaux

this.user.set(omit(res, ['token', 'refreshToken']));
  }

  setToken(res:AuthRes){
    localStorage.setItem('token',res.token);
    this.token.set(res.token);
  }
   getUser(): AuthUser | null {
    return this.user();
  }

  getToken(): string | null {
    return this.token();
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    this.token.set(null);
    this.user.set(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/auth/login']);
  }
}


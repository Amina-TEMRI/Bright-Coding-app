import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { SearchResponse, User } from '../models/user';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  urlApi: string = 'https://api.github.com';

  http = inject(HttpClient);

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users`);
  }

  searchUsers(search: string): Observable<User[]> {
    return this.http
      .get<SearchResponse>(`${this.urlApi}/search/users?q=${search}`)
      .pipe(
        map(res => res.items) // retourne User[]
      );
  }

}

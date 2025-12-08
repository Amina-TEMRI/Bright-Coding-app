import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/article';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories= signal<Category[]>([]); // variable partagé
   apiUrl = 'http://localhost:3004/categories';

  private http = inject(HttpClient);

  all(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiUrl);
  }
}

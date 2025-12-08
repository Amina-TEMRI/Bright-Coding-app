// import { Injectable, inject } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Article } from '../models/article';


// interface Action{
//   reaction?:{
//     likes: number;
//     dislikes:number;
//   }; 
//   views?:number;

// }
// @Injectable({
//   providedIn: 'root' //Crée une seule instance de ce service et rends-le disponible POUR TOUTE l’application.
// })
// export class BlogService {

//   private readonly apiUrl = 'http://localhost:3004/articles';

//   private http = inject(HttpClient);

//   // Récupérer tous les articles
//   all(): Observable<Article[]> {
//     return this.http.get<Article[]>(this.apiUrl);
//   }

//   // Ajouter un article
//   save(data: Article): Observable<Article> {
//     return this.http.post<Article>(this.apiUrl, data);
//   }

//   // Récupérer un article par son id
//   get(id: number): Observable<Article> {
//     return this.http.get<Article>(`${this.apiUrl}/${id}`);
//   }

//   // Modifier un article
//   update(id: number, data: Article): Observable<Article> {
//     return this.http.put<Article>(`${this.apiUrl}/${id}`, data);
//   }

//   actions (id: number, data:Action){
//     return this.http.patch<Article>(`${this.apiUrl}/${id}`, data);
//   }

//   // Supprimer un article
//   destroy(id: number): Observable<Article> {
//     return this.http.delete<Article>(`${this.apiUrl}/${id}`);
//   }
// }

import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

interface Action {
  reaction?: {
    likes: number;
    dislikes: number;
  };
  views?: number;
}

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly apiUrl = 'http://localhost:3004/articles';

  http = inject(HttpClient);

  all(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  save(data: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, data);
  }

  get(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  update(id: number, data: Article): Observable<Article> {
    return this.http.patch<Article>(`${this.apiUrl}/${id}`, data);
  }

  actions(id: number, data: Action) {
    return this.http.patch<Article>(`${this.apiUrl}/${id}`, data);
  }

  destroy(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.apiUrl}/${id}`);
  }
}

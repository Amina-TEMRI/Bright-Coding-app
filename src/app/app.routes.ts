import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GithubComponent } from './pages/github/github.component';
import { TodosComponent } from './pages/todos/todos.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LayoutBlogComponent } from './pages/blog/layout-blog/layout-blog.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: () => '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'elearning',
    loadComponent: () =>
      import('../app/pages/courses/courses.component').then(
        (c) => c.CoursesComponent
      ),
      canActivate:[authGuard],
  },
  {
    path: 'users',
    component: GithubComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
    canActivate:[authGuard],
  },
  {
    path: 'counter',
    component: CounterPageComponent,
    canActivate:[authGuard],
  },
  {
    path: 'blog',
    component: LayoutBlogComponent,
    
    
    loadChildren: () =>
      import('./pages/blog/blog.routes').then((m) => m.routes),
    

    
  },
  {
    path: 'auth',
     
  
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

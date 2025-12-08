import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { filter, Observable } from 'rxjs';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-layout-blog',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe, CommonModule],
  templateUrl: './layout-blog.component.html',
  styleUrls: ['./layout-blog.component.css'],
})
export class LayoutBlogComponent {
  
  title$!: Observable<string>;

  router = inject(Router);
  route = inject(ActivatedRoute);
  categoryService = inject(CategoryService);   // ✔ corrigé

  ngOnInit(): void {

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.title$ = this.route.firstChild?.title as Observable<string>;
      });

    this.categoryService.all().subscribe((res) => {
      this.categoryService.categories.set(res);
    });

  }
}

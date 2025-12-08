import { Component, ElementRef, inject, ViewChild } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Article } from '../../../models/article';
import { BlogService } from '../../../services/blog.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css',
})
export class ArticleCreateComponent {
  categoryService = inject(CategoryService);
  blogService = inject(BlogService);
  router = inject(Router);

  @ViewChild('title') title!: ElementRef;
  @ViewChild('category') category!: ElementRef;
  @ViewChild('body') body!: ElementRef;
  @ViewChild('image') image!: ElementRef;

  submit(myForm: NgForm) {
    if (myForm.invalid) {
      return;
    }

    const myArticle: Article = {
      ...myForm.value,
      views: 0,
      author: 1,
      reaction: {
        likes: 0,
        dislikes: 0,
      },
    };
    this.blogService.save(myArticle).subscribe({
      next: (res) => {
        this.router.navigate(['/blog/list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

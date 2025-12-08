import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { BlogService } from '../../../services/blog.service';
import { Article } from '../../../models/article';
import { Location } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css',
})
export class ArticleEditComponent {
  id!: number;

  articleForm!: FormGroup;

  constructor() {
    this.articleForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      body: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      image: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    });
  }

  categoryService = inject(CategoryService);
  blogService = inject(BlogService);
  location = inject(Location);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.loadArticle(res['id']);
      this.id = res['id'];
    });
  }

  loadArticle(id: number) {
    this.blogService.get(id).subscribe((res) => {
      this.articleForm.patchValue(res);
    });
  }

  submit() {
    if (this.articleForm.invalid) {
      return;
    }

    const myArticle: Article = {
      ...this.articleForm.value,
    } as Article;
    this.blogService.update(this.id, myArticle).subscribe({
      next: (res) => {
        this.location.back();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  get title() {
    return this.articleForm.get('title');
  }

  get body() {
    return this.articleForm.get('body');
  }

  get image() {
    return this.articleForm.get('image');
  }

  get category() {
    return this.articleForm.get('category');
  }
}

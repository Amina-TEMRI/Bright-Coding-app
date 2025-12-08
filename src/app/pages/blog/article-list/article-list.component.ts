import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { BlogService } from '../../../services/blog.service';
import { Article } from '../../../models/article';
import { ArticleCardComponent } from "../../../component/blog/article-card/article-card.component";

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [RouterLink, ArticleCardComponent],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  blogservice = inject(BlogService);
  articles= signal<Article[]>([])
  ngOnInit(){
    this.blogservice.all().subscribe(res =>this.articles.set(res));

  }

}

import { Component, inject, input, Input } from '@angular/core';
import { Article } from '../../../models/article';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  article = input.required<Article>();
  blogservice= inject(BlogService);

  like(article: Article) {
  if (article.id && article.reaction) {
    article.reaction.likes += 1;

    this.blogservice
      .actions(article.id, { reaction: article.reaction })
      .subscribe(res => console.log(res));
  }
}

dislike(article: Article) {
  if (article.id && article.reaction) {
    article.reaction.dislikes += 1;

    this.blogservice
      .actions(article.id, { reaction: article.reaction })
      .subscribe(res => console.log(res));
  }
}


}

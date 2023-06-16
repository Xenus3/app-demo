import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { Article } from 'src/app/entities/article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Article[] = [];

   constructor(public articleservice: ArticleService) {}
  ngOnInit(): void {
    this.articles = this.articleservice.getArticles();
  }
  
    
}

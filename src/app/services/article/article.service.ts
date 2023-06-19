import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from 'src/app/entities/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

 private articlesUrl: string = 'http://data.snx.ovh/API.json';

  constructor(private httpClient: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.articlesUrl);
  }
}

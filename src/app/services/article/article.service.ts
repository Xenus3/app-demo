import { Injectable } from '@angular/core';
import { Article } from 'src/app/entities/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private articles: Article[] = [
    {
      title:"Lorem ipsum dolor sit amet, consectetur adip.",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.",
      author:"JohnDoe",
      fullname: "Jonathan Doenuts",
      time: "10mn ago"
    }, 
  {
      title:"Lorem ipsum dolor sit amet, consectetur adip.",
      content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.",
      author:"Obrian",
      fullname: "Jonathan Doenuts",
      time: "20mn ago"
    }
  ]

  constructor() { }

  getArticles():Article[] {
    return this.articles;
  }
}

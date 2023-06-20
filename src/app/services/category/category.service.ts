import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from 'src/app/entities/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categoryUrl: string = 'https://api.publicapis.org/categories';

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<Category>(this.categoryUrl)
      .pipe(
        map((res: Category) => {
          return res.categories;
        }

        )
      );
  }
}

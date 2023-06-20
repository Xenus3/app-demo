import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/entities/category';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  
  category: string[] | undefined;

  constructor(private categoryservice: CategoryService) {}
  
  ngOnInit(): void {
    this.categoryservice.getCategories()
    .subscribe({
      next: (res) => this.category = res,
      error: (err) => console.error(err)
    });
  }

}

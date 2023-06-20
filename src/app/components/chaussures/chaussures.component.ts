import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/entities/chaussure';
import { ChaussureService } from 'src/app/services/chaussure/chaussure.service';


@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrls: ['./chaussures.component.css']
})
export class ChaussuresComponent implements OnInit{

  chaussures: Chaussure[] | undefined;

  constructor(public chaussureService: ChaussureService) {}

  
  ngOnInit(): void {
    this.chaussureService.getChaussures()
    .subscribe({
      next: (res) => this.chaussures = res,
      error: (err) => console.error(err)
    });
  }
  

}

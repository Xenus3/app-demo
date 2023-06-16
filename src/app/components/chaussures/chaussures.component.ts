import { Component, OnInit } from '@angular/core';
import { Chaussure } from 'src/app/entities/chaussure';
import { ChaussureService } from 'src/app/services/article/chaussure.service';

@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrls: ['./chaussures.component.css']
})
export class ChaussuresComponent implements OnInit{

  chaussures: Chaussure[] = [];

  constructor(public chaussureService: ChaussureService) {}

  
  ngOnInit(): void {
    this.chaussures = this.chaussureService.getChaussures();
  }
  

}

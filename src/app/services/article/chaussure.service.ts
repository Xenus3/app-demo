import { Injectable } from '@angular/core';
import { Chaussure } from 'src/app/entities/chaussure';

@Injectable({
  providedIn: 'root'
})
export class ChaussureService {

  private chaussures: Chaussure[] = [{name:"Chaussure A",price:125,quantity:0},{name:"Chaussure B",price:135,quantity:0}]

  constructor() { }

  getChaussures() {
    return this.chaussures;
  }
}

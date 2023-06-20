import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chaussure } from 'src/app/entities/chaussure';

@Injectable({
  providedIn: 'root'
})
export class ChaussureService {

  private chaussuresUrl: string = '';

  constructor(private httpClient: HttpClient) { }

  getChaussures(): Observable<Chaussure[]> {
    return this.httpClient.get<Chaussure[]>(this.chaussuresUrl);
  }
}

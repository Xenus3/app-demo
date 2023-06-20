import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Item } from 'src/app/entities/Item';
import { Entry } from 'src/app/entities/entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private entryUrl = 'https://api.publicapis.org/entries';

  constructor(private httpClient: HttpClient) { }

  getEntries(): Observable<Item[]> {
    return this.httpClient.get<Entry>(this.entryUrl)
      .pipe(
        map((res: Entry) => {
          return res.entries;
        }

        )
        
      );
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/entities/Item';
import { EntryService } from 'src/app/services/entry/entry.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {

  //sub: Subscription = this.entryservice.getEntries();
  entries: Item[] | undefined;

  constructor(private entryservice: EntryService) {}
 
  ngOnInit(): void {
    this.entryservice.getEntries()
    .subscribe({
      next: (res) => this.entries = res,
      error: (err) => console.error(err)
    });
  }

 /* ngOnDestroy(): void {
    this.sub.unsubscribe();
  }*/

}

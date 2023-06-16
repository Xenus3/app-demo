import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
  username: String = 'Karim';

    ngAfterViewInit(): void {
      document.getElementById("menu")?.addEventListener('click', () => {
        this.username = "toto";
      })
    }
}

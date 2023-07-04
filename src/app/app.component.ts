import { Component, HostListener, } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecomFrontEnd';

  @HostListener('window:beforeunload')
  clearLocalStorage() {
    localStorage.clear();
  }
}

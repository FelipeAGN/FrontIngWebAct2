import { Component } from '@angular/core';
import {NavbarComponent } from './components/navbar/navbar.component';
import {SnotifyService} from 'ng-snotify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(private snotifyService: SnotifyService) {
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html',
  template: '<div class="app-main"> <router-outlet></router-outlet> </div>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-template';
}

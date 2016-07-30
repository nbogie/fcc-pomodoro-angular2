import { Component } from '@angular/core';
import { TimerComponent } from './timer';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TimerComponent]
})
export class AppComponent {
  title = 'app works!';
  color = 'red';
  add(a,b) {
      return a + b;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-lifecycle-hooks-app';

  
message: string = 'Hello Child';
  showChild: boolean = true;

  changeMessage() {
    this.message = 'Updated Message ' + Math.random();
  }

  destroyChild() {
    this.showChild = false;
  }

  
}

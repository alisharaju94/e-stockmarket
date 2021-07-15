import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  selectedLink : string = 'recipe';

  getLinkSelection(data) {
    this.selectedLink = data;
  }
 
}

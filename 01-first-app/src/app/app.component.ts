import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template: `
          <h1>Inline template</h1>
  `,*/
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'I changed it!';
  delete =false;
  test= 'start value';
  boundValue=1000;
}

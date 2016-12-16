import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-another',
  templateUrl: './another.component.html',
  styles: [`
    article {
      border: 1px solid black;
    }
  `]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
     <h1>The Home Component</h1>
  `
})

export class HomeComponent implements OnInit {
  title:string;
  constructor() {
    this.title = "";
  }

  ngOnInit() {
    this.title = 'The Home Component';
  }
}

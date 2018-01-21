import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  template: `
    <h1>protected</h1>
  `,
  styles: []
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  /*template:`
    <h1>Jello hello</h1>
    <fa-databinding></fa-databinding>
  `,*/
  // styleUrls: ['./app.component.css']
  styles: [`h1 {
    color: #5ba4ff
  }`]
})
export class AppComponent {
  title:string = 'first app';
  test:string = 'Starting value';
  boundValue:number = 5000;
  delete: boolean = false;
}

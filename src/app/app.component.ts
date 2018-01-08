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
  styles: [`h1 {color: red}`]
})
export class AppComponent {
  title:string = 'first app';
}

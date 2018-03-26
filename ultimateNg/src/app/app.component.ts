import { Component, Input } from '@angular/core';
import { Spok } from './spok';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello hi asdasd';
  today = new Date();

  @Input() test:any;

  submitted = false;
  // newSpok = new Spok(0, '','');

  newSpok = {
    stockAuthor: 'author',
    stockCode: 'code'
  };



  onSubmit() {
    this.submitted = true;
  }

  cancel(){
    this.submitted = false;
    this.newSpok = new Spok(0, '','');
  }

  profile = {id: 10001, name: "Gkfmg mk", role: 'administrator'}
}

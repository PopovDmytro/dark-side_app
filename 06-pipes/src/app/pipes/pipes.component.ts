import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `]
})
export class PipesComponent implements OnInit {

  myValue: string = 'lowercase';
  myDate: any = new Date(2016,5,24);
  values: string[] = ['Milk', 'Bread', 'Bean'];
  asyncValue = new Promise ((resolve, reject) => {
    setTimeout(() => resolve('Date is here!'), 2000);
  });

  constructor() { }

  ngOnInit() {
  }



}

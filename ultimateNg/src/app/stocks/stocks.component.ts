import {Component} from '@angular/core';
import {StockService} from '../stock.service';

@Component({
  selector: 'app-stocks',
  template: `
    <h1>Stocks Component</h1>
    <ul>
      <ng-container *ngFor="let item of stockMarkets">
        <li *ngIf="item !== 'lse'">{{item}}</li>
      </ng-container>
    </ul>
    <hr>
    <div class="" [ngSwitch]="'Nyse'">
      <div class="" *ngSwitchCase="'Nyse'">NYSE</div>
        <div class="" *ngSwitchCase="'Lse'">LSE</div>
      <div class="" *ngSwitchDefault>Lorem ipsum dolor color.</div>
    </div>
    <div class="" [ngStyle]="{'color': myColor}">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, recusandae?
    </div>
    <div class="" [ngClass]="{'upper': 1, 'colored': 1}">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, quibusdam!
    </div>   
  `,
  styles: [`
    h1 {color: lightblue;}
    .upper {text-transform:uppercase;}
    .colored {color: #1db4f9}
  `]
})
export class StocksComponent {
  stocks: string[];
  stockService: StockService;

  stockMarkets = ['Nyse', 'nasdag', 'euronext', 'lse'];
  myColor = 'green';

  constructor(stockService: StockService) {
    this.stockService = stockService;
    this.stocks = stockService.getStocks();
  }

}

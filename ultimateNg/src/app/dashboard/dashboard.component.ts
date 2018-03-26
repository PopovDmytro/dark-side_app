import { Component, OnInit } from '@angular/core';

import { StockService } from '../stock.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: string[];
  selectedStock: any;
  updateEnabled = false;

  constructor( private stockS: StockService ) {
  }

  showTest($e){
    console.log($e);
  }

  ngOnInit() {
   this.getAllStocks();
  }

  getAllStocks() {
    this.stockS.getStocksAPI()
      .subscribe(
        data => this.stocks = data,
        error => console.log(error)
      );
  }

  createStock(newStockCode:string, newAuthor:string) {
    this.stockS.createStock(newStockCode, newAuthor).subscribe(
      date => {
        this.getAllStocks();
      }
    );
  }

  updateStock(newStockCode:string, newAuthor:string) {
    this.stockS.updateStock(this.selectedStock.id, newStockCode, newAuthor).subscribe(
      date => {
        this.getAllStocks();
      }
    );
  }

  deleteStock(stockId:string) {
    this.stockS.deleteStock(stockId).subscribe(
      date => {
        this.getAllStocks();
      }
    );
  }

  loadDetails(stock:any){
    this.updateEnabled = true;
    this.selectedStock = stock;
  }
}

import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Rx";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class StockService {

    constructor(private http: HttpClient) {

    }

    getStocks() : string[] {
        return ['a', 'bapl', 'google'];
    }

    getStocksAPI() : Observable<any> {
      return this.http.get('http://localhost:3000/stocks')
        .map((res) => res)
        .catch((error: any) => Observable.throw(error || 'Server error'));
    }

    createStock(newStockCode:string, newAuthor : string) : Observable<any> {
      return this.http.post('http://localhost:3000/stocks', { author : newAuthor, stockCode: newStockCode});
    }

    updateStock(stockId : string, newStockCode : string, newAuthor : string) : Observable<any> {
      return this.http.put('http://localhost:3000/stocks/' + stockId, { author : newAuthor, stockCode: newStockCode});
    }

    deleteStock(stockId : string) : Observable<any> {
      return this.http.delete('http://localhost:3000/stocks/' + stockId);
    }
}

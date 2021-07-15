import { StockRangeDetails } from './../shared/stock-range-details.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  onStocksLoad: Subject<StockRangeDetails> = new Subject();
  stockDetails: StockRangeDetails;

  constructor() { }

  getStocks() {
    return this.stockDetails;
  }

  setStocks(stockDetails: StockRangeDetails) {
    this.stockDetails = stockDetails;
    this.onStocksLoad.next(stockDetails);
  }

}

import { StockService } from './../stock.service';
import { Subscription } from 'rxjs';
import { StockRangeDetails } from './../../shared/stock-range-details.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  stockDetails: StockRangeDetails;
  subscription: Subscription;
  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.stockDetails = this.stockService.getStocks();
    }, 200);
    this.subscription = this.stockService.onStocksLoad.subscribe(
      (stockDetails) => this.stockDetails = stockDetails);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

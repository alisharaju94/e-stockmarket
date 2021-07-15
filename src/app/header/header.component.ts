import { StockmarketService } from '../shared/stockmarket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private stockmarketService: StockmarketService) {}

  ngOnInit() {
    this.fetchCompanies();
  }

  fetchCompanies() {
    this.stockmarketService.fetchCompanies().subscribe();
  }

}

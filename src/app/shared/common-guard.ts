import { StockService } from './../stocks/stock.service';
import { StockmarketService } from './stockmarket.service';
import { Company } from './../companies/company.model';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Stocks } from '../stocks/stocks.model';
import { CompanyService } from '../companies/company.service';

@Injectable({ providedIn: 'root' })
export class CommonGuard implements Resolve<Stocks> {
  constructor(
    private companyService: CompanyService,
    private stockMarketService: StockmarketService,
    private stockService: StockService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //const companyCode = route.params.code;
    if (this.stockService.getStocks() != null) {
      this.stockService.setStocks(null);
    }
    const companies = this.companyService.getCompanies();
    if (companies.length === 0) {
      return this.stockMarketService.fetchCompanies();
    }
    return companies;
  }
}

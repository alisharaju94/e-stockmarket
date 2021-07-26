import { CompanyList } from './../companies/company-list.model';
import { StockService } from './../stocks/stock.service';
import { StockmarketService } from './stockmarket.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { CompanyService } from '../companies/company.service';

@Injectable({ providedIn: 'root' })
  export class CommonGuard implements Resolve<Object> {
  constructor(
    private companyService: CompanyService,
    private stockMarketService: StockmarketService,
    private stockService: StockService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
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

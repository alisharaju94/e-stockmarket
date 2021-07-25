import { StockRangeDetails } from './stock-range-details.model';
import { StockService } from './../stocks/stock.service';
import { CompanyList } from '../companies/company-list.model';
import { map, tap } from 'rxjs/operators';
import { CompanyService } from '../companies/company.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketRequest } from './market-request.model';

@Injectable({
  providedIn: 'root',
})
export class StockmarketService {
  GET_COMPANIES_URL =
    'https://97y75pqdhd.execute-api.ap-south-1.amazonaws.com/prod/market/company/getAll';
  GET_STOCKS_URL =
    'https://97y75pqdhd.execute-api.ap-south-1.amazonaws.com/prod/market/stock/';
  constructor(
    private httpClient: HttpClient,
    private companyService: CompanyService,
    private stockService: StockService
  ) {}

  fetchCompanies() {
    return this.httpClient.get<CompanyList>(this.GET_COMPANIES_URL).pipe(
      tap((data) => {
        this.companyService.setCompanies(data.companies);
      })
    );
  }

  // fetchStocks(comCode: number) {
  //   return this.httpClient.get<Stocks>(this.GET_STOCKS_URL+comCode).pipe(
  //     tap((data) => {
  //         this.stockService.setStocks(data.)
  //     })
  //   );
  // }

  getStocksFortheRange(comCode: string, startDate: string, endDate: string) {
    const params = new HttpParams({
      fromString: 'strtDate='+startDate+'&endDate='+endDate
    });
    return this.httpClient.get<StockRangeDetails>(this.GET_STOCKS_URL+comCode, {params: params}).pipe(
      tap(data => {
        this.stockService.setStocks(data);
      })
    )
  }

  onRegisterCompany(item: MarketRequest) {
    // this.ingredients.push(item);
    // this.updatedIngrediantList.next(this.ingredients.slice());
  }
}

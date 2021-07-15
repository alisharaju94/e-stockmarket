import { LoggingInterceptor } from './shared/logging-interceptor.service';
import { AppRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CompanyStartComponent } from './companies/company-start/company-start.component';
import { CompanyItemComponent } from './companies/company-list/company-item/company-item.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockItemComponent } from './stocks/stock-item/stock-item.component';
import { PriceComponent } from './stocks/stock-item/price/price.component';
import { StockmarketService } from './shared/stockmarket.service';
import { CompanyAddComponent } from './companies/company-add/company-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    CompaniesComponent,
    CompanyListComponent,
    CompanyStartComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    StocksComponent,
    StockItemComponent,
    PriceComponent,
    CompanyAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    StockmarketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

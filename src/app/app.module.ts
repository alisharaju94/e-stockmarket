import { AppRouting } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyListComponent } from './companies/company-list/company-list.component';
import { CompanyStartComponent } from './companies/company-start/company-start.component';
import { CompanyItemComponent } from './companies/company-list/company-item/company-item.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { StockItemComponent } from './stocks/stock-item/stock-item.component';
import { PriceComponent } from './stocks/stock-item/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompaniesComponent,
    CompanyListComponent,
    CompanyStartComponent,
    CompanyItemComponent,
    CompanyDetailComponent,
    StockItemComponent,
    PriceComponent,
  ],
  imports: [
    BrowserModule,
    AppRouting,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
